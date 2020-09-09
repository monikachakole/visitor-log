import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorEntryFormComponent } from './visitor-entry-form.component';

describe('VisitorEntryFormComponent', () => {
  let component: VisitorEntryFormComponent;
  let fixture: ComponentFixture<VisitorEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorEntryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
