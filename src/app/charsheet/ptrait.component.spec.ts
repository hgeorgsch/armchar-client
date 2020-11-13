import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtraitComponent } from './ptrait.component';

describe('PtraitComponent', () => {
  let component: PtraitComponent;
  let fixture: ComponentFixture<PtraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
