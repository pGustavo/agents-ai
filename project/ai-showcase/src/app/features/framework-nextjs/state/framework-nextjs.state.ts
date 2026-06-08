import { Injectable, computed, inject, signal } from '@angular/core';
import { FrameworkNextjsService } from '../services/framework-nextjs.service';

@Injectable({ providedIn: 'root' })
export class FrameworkNextjsState {
  private readonly service = inject(FrameworkNextjsService);
  private readonly detailSignal = signal(this.service.getDetail());

  readonly detail = computed(() => this.detailSignal());
}
