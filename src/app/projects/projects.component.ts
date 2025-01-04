import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../constants/constants';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  constructor(private router: Router) {}

  redirectsTo(page: string) {
    this.router.navigate([ROUTES.PROJECTS + page]);
  }
}
