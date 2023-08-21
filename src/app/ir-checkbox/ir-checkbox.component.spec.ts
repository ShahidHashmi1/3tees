import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrCheckboxComponent } from './ir-checkbox.component';

describe('IrCheckboxComponent', () => {
  let component: IrCheckboxComponent;
  let fixture: ComponentFixture<IrCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IrCheckboxComponent]
    });
    fixture = TestBed.createComponent(IrCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
