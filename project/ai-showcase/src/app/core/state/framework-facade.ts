import { Injectable, inject } from '@angular/core';
import { FrameworkSlug } from '../models/framework-profile.model';
import { FrameworkState } from './framework-state';

@Injectable({
  providedIn: 'root',
})
export class FrameworkFacade {
  private readonly state = inject(FrameworkState);
  readonly frameworks = this.state.frameworks;
  readonly summaries = this.state.summaries;
  readonly selectedSlug = this.state.selectedSlug;

  selectFramework(slug: FrameworkSlug): void {
    this.state.selectFramework(slug);
  }

  frameworkBySlug(slug: FrameworkSlug) {
    return this.state.frameworkBySlug(slug);
  }
}
