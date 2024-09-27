import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularContainerComponent } from './circular-container.component';

describe('CircularContainerComponent', () => {
  let component: CircularContainerComponent;
  let fixture: ComponentFixture<CircularContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircularContainerComponent],
    });
    fixture = TestBed.createComponent(CircularContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
