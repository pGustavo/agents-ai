import { Injectable, inject } from '@angular/core';
import { FrameworkContent } from '../../../core/services/framework-content';
import { mapFrameworkAngular } from '../mappers/framework-angular.mapper';
import { FrameworkAngularModel } from '../models/framework-angular.model';
import { assertFrameworkAngular } from '../validators/framework-angular.validator';

@Injectable({ providedIn: 'root' })
export class FrameworkAngularService {
  private readonly content = inject(FrameworkContent);

  getDetail(): FrameworkAngularModel {
    const profile = this.content.getFrameworkProfiles().find((item) => item.slug === 'angular') ?? null;
    const mapped = profile ? mapFrameworkAngular(profile) : null;
    assertFrameworkAngular(mapped);
    return mapped;
  }
}
