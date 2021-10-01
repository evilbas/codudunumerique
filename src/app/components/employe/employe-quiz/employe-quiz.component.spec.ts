import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeQuizComponent } from './employe-quiz.component';

describe('EmployeQuizComponent', () => {
  let component: EmployeQuizComponent;
  let fixture: ComponentFixture<EmployeQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
