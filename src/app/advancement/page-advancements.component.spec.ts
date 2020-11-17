import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdvancementsComponent } from './page-advancements.component';

describe('PageAdvancementsComponent', () => {
  let component: PageAdvancementsComponent;
  let fixture: ComponentFixture<PageAdvancementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdvancementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdvancementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
