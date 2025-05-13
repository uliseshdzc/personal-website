import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiQuestioningComponent } from './ai-questioning.component';

describe('AiQuestioningComponent', () => {
  let component: AiQuestioningComponent;
  let fixture: ComponentFixture<AiQuestioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiQuestioningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiQuestioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
