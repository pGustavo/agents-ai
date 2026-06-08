import { ChangeDetectionStrategy, Component } from '@angular/core';
import { input } from '@angular/core';
import { FrameworkProfile } from '../../../core/models/framework-profile.model';

@Component({
  selector: 'app-framework-detail',
  imports: [],
  templateUrl: './framework-detail.html',
  styleUrl: './framework-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameworkDetail {
  readonly framework = input.required<FrameworkProfile>();
}
