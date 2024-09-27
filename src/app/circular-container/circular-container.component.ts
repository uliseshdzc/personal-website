import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-circular-container',
  templateUrl: './circular-container.component.html',
  styleUrls: ['./circular-container.component.scss'],
})
export class CircularContainerComponent {
  @Input() onClick?: () => void;
  @Input() image?: string;

  showContent = true;

  onMouseEnter() {
    this.showContent = false;
  }

  onMouseLeave() {
    this.showContent = true;
  }
}
