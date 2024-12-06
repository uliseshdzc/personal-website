import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'personal-website';

  navigateToUrl(url: string) {
    return () => window.open(url);
  }

  ngAfterViewInit() {
    const options = {
      threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const textLightElements = entry.target.querySelectorAll('.text-light');
          textLightElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate');
            }, index * 500); // Delay each animation by 500ms
          });
        }
      });
    }, options);

    const elements = document.querySelectorAll('.column-container');
    elements.forEach(element => {
      observer.observe(element);
    });
  }
}
