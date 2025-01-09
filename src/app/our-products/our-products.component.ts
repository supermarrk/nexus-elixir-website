import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../constants/constants';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurProductsComponent {
  constructor(private router: Router) {}

  redirectsTo(page: string) {
    this.router.navigate([ROUTES.PRODUCTS + page]);
  }
}
