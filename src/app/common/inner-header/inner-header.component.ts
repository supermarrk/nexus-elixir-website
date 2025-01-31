import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentRouteService } from '../../services/common/current-route/current-route.service';
import { HARDWARE, HARDWARE_HEADER, ROUTES, SOFTWARE, SOFTWARE_HEADER } from '../../constants/constants';

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
  nextPage = this.currentPage == SOFTWARE ? HARDWARE : SOFTWARE;
  headerMenu = this.currentPage == SOFTWARE ? HARDWARE_HEADER : SOFTWARE_HEADER;

  backToHome() {
    this.router.navigate([ROUTES.HOME]);
  }

  goToNextPage() {
    this.router.navigate([ROUTES.PRODUCTS + this.nextPage]);
  }
}
