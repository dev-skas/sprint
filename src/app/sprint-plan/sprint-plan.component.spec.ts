import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintPlanComponent } from './sprint-plan.component';

describe('SprintPlanComponent', () => {
  let component: SprintPlanComponent;
  let fixture: ComponentFixture<SprintPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
