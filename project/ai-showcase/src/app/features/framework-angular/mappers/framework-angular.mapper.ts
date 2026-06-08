import { FrameworkProfile } from '../../../core/models/framework-profile.model';
import { FrameworkAngularModel } from '../models/framework-angular.model';
import { angularFrameworkBadge } from '../utils/framework-angular.utils';

export function mapFrameworkAngular(profile: FrameworkProfile): FrameworkAngularModel {
  return {
    ...profile,
    frameworkBadge: angularFrameworkBadge(),
  };
}
