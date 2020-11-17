import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAdvancementComponent } from './character-advancement.component';

describe('CharacterAdvancementComponent', () => {
  let component: CharacterAdvancementComponent;
  let fixture: ComponentFixture<CharacterAdvancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterAdvancementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterAdvancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
