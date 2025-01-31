import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InnerPageComponent } from '../../common/inner-page/inner-page.component';

@Component({
  selector: 'app-it',
  standalone: true,
  imports: [InnerPageComponent],
  templateUrl: './it.component.html',
  styleUrl: './it.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItComponent {

}
