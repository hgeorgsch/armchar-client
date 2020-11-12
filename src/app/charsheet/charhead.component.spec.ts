import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharheadComponent } from './charhead.component';

describe('CharheadComponent', () => {
  let component: CharheadComponent;
  let fixture: ComponentFixture<CharheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
