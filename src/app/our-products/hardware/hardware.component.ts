import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InnerPageComponent } from '../../common/inner-page/inner-page.component';

@Component({
  selector: 'app-hardware',
  standalone: true,
  imports: [InnerPageComponent],
  templateUrl: './hardware.component.html',
  styleUrl: './hardware.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HardwareComponent {

}
