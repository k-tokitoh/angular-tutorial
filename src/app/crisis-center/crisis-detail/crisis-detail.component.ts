import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  crisis$!: Observable<Crisis>;
  crisis!: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getCrisis(params.get('id')!))
    );
    this.crisis$.subscribe((crisis) => {
      this.crisis = crisis;
    });
  }

  gotoCrises() {
    this.router.navigate(['../', { id: this.crisis.id }], {
      relativeTo: this.route,
    });
  }
}
