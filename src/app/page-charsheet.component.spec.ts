import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCharsheetComponent } from './page-charsheet.component';

describe('PageCharsheetComponent', () => {
  let component: PageCharsheetComponent;
  let fixture: ComponentFixture<PageCharsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCharsheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCharsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
