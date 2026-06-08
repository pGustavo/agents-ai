import { Injectable, inject } from '@angular/core';
import { FrameworkContent } from '../../../core/services/framework-content';
import { mapFrameworkNextjs } from '../mappers/framework-nextjs.mapper';
import { FrameworkNextjsModel } from '../models/framework-nextjs.model';
import { assertFrameworkNextjs } from '../validators/framework-nextjs.validator';

@Injectable({ providedIn: 'root' })
export class FrameworkNextjsService {
  private readonly content = inject(FrameworkContent);

  getDetail(): FrameworkNextjsModel {
    const profile = this.content.getFrameworkProfiles().find((item) => item.slug === 'nextjs') ?? null;
    const mapped = profile ? mapFrameworkNextjs(profile) : null;
    assertFrameworkNextjs(mapped);
    return mapped;
  }
}
