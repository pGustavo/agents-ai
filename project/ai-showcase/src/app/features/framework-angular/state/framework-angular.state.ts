import { Injectable, computed, inject, signal } from '@angular/core';
import { FrameworkAngularService } from '../services/framework-angular.service';

@Injectable({ providedIn: 'root' })
export class FrameworkAngularState {
  private readonly service = inject(FrameworkAngularService);
  private readonly detailSignal = signal(this.service.getDetail());

  readonly detail = computed(() => this.detailSignal());
}
