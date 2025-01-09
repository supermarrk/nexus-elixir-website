import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InnerPageComponent } from '../../common/inner-page/inner-page.component';

@Component({
  selector: 'app-software',
  standalone: true,
  imports: [InnerPageComponent],
  templateUrl: './software.component.html',
  styleUrl: './software.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoftwareComponent {

}
