import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { EVENT, HOME_SECTION, HOME_SECTION_ID, SECTION, SMOOTH, WINDOW_SCROLL } from '../../constants/constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  isNavFixed = false;
  activeSection: string = HOME_SECTION;

  ngOnInit(): void {
    this.observeSections();
  }

  goTo(page: string): void {
    document.getElementById(page)?.scrollIntoView({behavior: SMOOTH});
  }

  @HostListener(WINDOW_SCROLL, [EVENT])
  onWindowScroll() {
    const element = document.querySelector(HOME_SECTION_ID);
    if (element) {
      const rect = element.getBoundingClientRect(); // Get the element's position relative to the viewport
      let max = window.innerHeight;
      this.isNavFixed = rect.top + max - 70 <= 0 ? true : false;
    }
  }

  observeSections(): void {
    const sections = document.querySelectorAll(SECTION);
    const options = {
      root: null,
      threshold: 0.2, // Trigger when 40% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
  }
}
