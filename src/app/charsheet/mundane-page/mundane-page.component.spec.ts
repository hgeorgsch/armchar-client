import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MundanePageComponent } from './mundane-page.component';

describe('MundanePageComponent', () => {
  let component: MundanePageComponent;
  let fixture: ComponentFixture<MundanePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MundanePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MundanePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
