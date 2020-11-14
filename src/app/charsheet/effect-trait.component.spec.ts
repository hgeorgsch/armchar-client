import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectTraitComponent } from './effect-trait.component';

describe('EffectTraitComponent', () => {
  let component: EffectTraitComponent;
  let fixture: ComponentFixture<EffectTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffectTraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
