import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagdialogComponent } from './bagdialog.component';

describe('BagdialogComponent', () => {
  let component: BagdialogComponent;
  let fixture: ComponentFixture<BagdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BagdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
