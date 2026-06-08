import { FrameworkProfile } from '../../../core/models/framework-profile.model';
import { HomeFrameworkCardModel } from '../models/home-summary.model';

export function mapFrameworkProfileToHomeCard(
  profile: FrameworkProfile,
): HomeFrameworkCardModel {
  return {
    slug: profile.slug,
    name: profile.name,
    summary: profile.summary,
    architectureModel: profile.architectureModel,
    routePath: `/${profile.slug}`,
  };
}
