import { Injectable, computed, inject, signal } from '@angular/core';
import { FrameworkReactService } from '../services/framework-react.service';

@Injectable({ providedIn: 'root' })
export class FrameworkReactState {
  private readonly service = inject(FrameworkReactService);
  private readonly detailSignal = signal(this.service.getDetail());

  readonly detail = computed(() => this.detailSignal());
}
