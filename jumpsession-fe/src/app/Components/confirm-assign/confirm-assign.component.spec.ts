import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAssignComponent } from './confirm-assign.component';

describe('ConfirmAssignComponent', () => {
  let component: ConfirmAssignComponent;
  let fixture: ComponentFixture<ConfirmAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmAssignComponent]
    });
    fixture = TestBed.createComponent(ConfirmAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
