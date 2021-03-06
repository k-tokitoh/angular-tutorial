import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(
    CRISES
  );

  constructor(private messageService: MessageService) {}

  getCrises() {
    return this.crises$;
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((crises: Crisis[]) => crises.find((crisis) => crisis.id === +id)!)
    );
  }
}
