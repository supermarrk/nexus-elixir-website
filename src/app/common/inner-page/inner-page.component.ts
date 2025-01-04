import { AfterViewInit, ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { InnerHeaderComponent } from '../inner-header/inner-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inner-page',
  standalone: true,
  imports: [InnerHeaderComponent, CommonModule],
  templateUrl: './inner-page.component.html',
  styleUrl: './inner-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerPageComponent implements AfterViewInit {
  @Input() body!: TemplateRef<any>;
  @Input() footer!: TemplateRef<any>;

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
}
