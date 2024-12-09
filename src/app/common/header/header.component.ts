import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

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
  activeSection: string = 'home_section';

  ngOnInit(): void {
    this.observeSections();
  }

  goTo(page: string): void {
    document.getElementById(page)?.scrollIntoView({behavior: "smooth"});
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = document.querySelector('#home_section');
    if (element) {
      const rect = element.getBoundingClientRect(); // Get the element's position relative to the viewport
      let max = window.innerHeight;
      this.isNavFixed = rect.top + max - 70 <= 0 ? true : false;
    }
  }

  observeSections(): void {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      threshold: 0.4, // Trigger when 40% of the section is visible
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
