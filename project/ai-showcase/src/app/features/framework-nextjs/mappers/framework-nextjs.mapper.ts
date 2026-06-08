import { FrameworkProfile } from '../../../core/models/framework-profile.model';
import { FrameworkNextjsModel } from '../models/framework-nextjs.model';
import { nextjsFrameworkBadge } from '../utils/framework-nextjs.utils';

export function mapFrameworkNextjs(profile: FrameworkProfile): FrameworkNextjsModel {
  return {
    ...profile,
    frameworkBadge: nextjsFrameworkBadge(),
  };
}
