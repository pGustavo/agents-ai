import { FrameworkReactModel } from '../models/framework-react.model';

export function assertFrameworkReact(value: FrameworkReactModel | null): asserts value is FrameworkReactModel {
  if (!value || value.slug !== 'react') {
    throw new Error('React feature data is invalid.');
  }
}
