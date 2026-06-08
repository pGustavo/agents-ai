import { FrameworkNextjsModel } from '../models/framework-nextjs.model';

export function assertFrameworkNextjs(value: FrameworkNextjsModel | null): asserts value is FrameworkNextjsModel {
  if (!value || value.slug !== 'nextjs') {
    throw new Error('Next.js feature data is invalid.');
  }
}
