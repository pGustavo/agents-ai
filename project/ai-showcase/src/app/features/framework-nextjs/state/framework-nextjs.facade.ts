import { Injectable, inject } from '@angular/core';
import { FrameworkNextjsState } from './framework-nextjs.state';

@Injectable({ providedIn: 'root' })
export class FrameworkNextjsFacade {
  private readonly state = inject(FrameworkNextjsState);
  readonly detail = this.state.detail;
}
