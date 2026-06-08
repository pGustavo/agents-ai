import { FrameworkAngularModel } from '../models/framework-angular.model';

export function assertFrameworkAngular(value: FrameworkAngularModel | null): asserts value is FrameworkAngularModel {
  if (!value || value.slug !== 'angular') {
    throw new Error('Angular feature data is invalid.');
  }
}
