import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HeaderComponent } from '../common/header/header.component';
import { OurTeamComponent } from '../our-team/our-team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutUsComponent, OurTeamComponent, ProjectsComponent, ContactUsComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  
}
