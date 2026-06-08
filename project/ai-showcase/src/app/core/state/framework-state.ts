import { Injectable, computed, inject, signal } from '@angular/core';
import { FrameworkSlug } from '../models/framework-profile.model';
import { FrameworkContent } from '../services/framework-content';
import { assertFrameworkProfiles } from '../validators/framework-content.validator';

@Injectable({
  providedIn: 'root',
})
export class FrameworkState {
  private readonly content = inject(FrameworkContent);
  private readonly frameworksSignal = signal(this.content.getFrameworkProfiles());
  private readonly selectedSlugSignal = signal<FrameworkSlug | null>(null);

  readonly frameworks = computed(() => this.frameworksSignal());
  readonly selectedSlug = computed(() => this.selectedSlugSignal());
  readonly summaries = computed(() =>
    this.frameworks().map((framework) => ({
      slug: framework.slug,
      name: framework.name,
      summary: framework.summary,
      architectureModel: framework.architectureModel,
    })),
  );

  constructor() {
    assertFrameworkProfiles(this.frameworks());
  }

  selectFramework(slug: FrameworkSlug): void {
    this.selectedSlugSignal.set(slug);
  }

  frameworkBySlug(slug: FrameworkSlug) {
    return computed(() =>
      this.frameworks().find((framework) => framework.slug === slug),
    );
  }
}
