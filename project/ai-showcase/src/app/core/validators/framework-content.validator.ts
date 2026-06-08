import { FrameworkProfile } from '../models/framework-profile.model';

export function assertFrameworkProfiles(value: FrameworkProfile[]): void {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error('Framework content must contain at least one profile.');
  }

  for (const profile of value) {
    if (!profile.slug || !profile.name || !profile.summary) {
      throw new Error('Framework profile is missing required identity fields.');
    }
    if (!profile.capabilities.length || !profile.agentRoles.length || !profile.workflow.length) {
      throw new Error(`Framework profile "${profile.slug}" must include capabilities, roles, and workflow.`);
    }
  }
}
