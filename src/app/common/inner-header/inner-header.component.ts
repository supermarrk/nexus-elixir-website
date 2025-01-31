import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentRouteService } from '../../services/common/current-route/current-route.service';
import { IT_SERVICES_LINK, IT_SERVICES_HEADER, ROUTES, SOFTWARE_LINK, SOFTWARE_HEADER } from '../../constants/constants';

@Component({
  selector: 'app-inner-header',
  standalone: true,
  imports: [],
  templateUrl: './inner-header.component.html',
  styleUrl: './inner-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerHeaderComponent {
constructor(private router: Router, private currentRouteService: CurrentRouteService) {}

  currentPage = this.currentRouteService.getCurrentRouteSnapshot();
  nextPage = this.currentPage == SOFTWARE_LINK ? IT_SERVICES_LINK : SOFTWARE_LINK;
  headerMenu = this.currentPage == SOFTWARE_LINK ? IT_SERVICES_HEADER : SOFTWARE_HEADER;

  backToHome() {
    this.router.navigate([ROUTES.HOME]);
  }

  goToNextPage() {
    this.router.navigate([ROUTES.PRODUCTS + this.nextPage]);
  }
}
