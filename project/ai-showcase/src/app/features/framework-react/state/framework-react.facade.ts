import { Injectable, inject } from '@angular/core';
import { FrameworkReactState } from './framework-react.state';

@Injectable({ providedIn: 'root' })
export class FrameworkReactFacade {
  private readonly state = inject(FrameworkReactState);
  readonly detail = this.state.detail;
}
