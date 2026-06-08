import { Injectable, inject } from '@angular/core';
import { FrameworkAngularState } from './framework-angular.state';

@Injectable({ providedIn: 'root' })
export class FrameworkAngularFacade {
  private readonly state = inject(FrameworkAngularState);
  readonly detail = this.state.detail;
}
