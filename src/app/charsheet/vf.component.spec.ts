import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfComponent } from './vf.component';

describe('VfComponent', () => {
  let component: VfComponent;
  let fixture: ComponentFixture<VfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
