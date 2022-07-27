import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElivationComponent } from './elivation.component';

describe('ElivationComponent', () => {
  let component: ElivationComponent;
  let fixture: ComponentFixture<ElivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
