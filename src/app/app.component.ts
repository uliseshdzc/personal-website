import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'personal-website';

  navigateToUrl(url: string) {
    return () => window.open(url);
  }
}
