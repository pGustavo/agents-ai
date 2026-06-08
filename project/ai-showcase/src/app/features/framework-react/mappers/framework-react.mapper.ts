import { FrameworkProfile } from '../../../core/models/framework-profile.model';
import { FrameworkReactModel } from '../models/framework-react.model';
import { reactFrameworkBadge } from '../utils/framework-react.utils';

export function mapFrameworkReact(profile: FrameworkProfile): FrameworkReactModel {
  return {
    ...profile,
    frameworkBadge: reactFrameworkBadge(),
  };
}
