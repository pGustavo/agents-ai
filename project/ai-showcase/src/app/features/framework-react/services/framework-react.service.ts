import { Injectable, inject } from '@angular/core';
import { FrameworkContent } from '../../../core/services/framework-content';
import { mapFrameworkReact } from '../mappers/framework-react.mapper';
import { FrameworkReactModel } from '../models/framework-react.model';
import { assertFrameworkReact } from '../validators/framework-react.validator';

@Injectable({ providedIn: 'root' })
export class FrameworkReactService {
  private readonly content = inject(FrameworkContent);

  getDetail(): FrameworkReactModel {
    const profile = this.content.getFrameworkProfiles().find((item) => item.slug === 'react') ?? null;
    const mapped = profile ? mapFrameworkReact(profile) : null;
    assertFrameworkReact(mapped);
    return mapped;
  }
}
