import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainSparksComponent } from './brain-sparks.component';

describe('BrainSparksModelComponent', () => {
  let component: BrainSparksComponent;
  let fixture: ComponentFixture<BrainSparksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrainSparksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrainSparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
