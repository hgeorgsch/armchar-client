import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherEquipmentComponent } from './other-equipment.component';

describe('OtherEquipmentComponent', () => {
  let component: OtherEquipmentComponent;
  let fixture: ComponentFixture<OtherEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
