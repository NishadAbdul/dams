import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDataEntryComponent } from './manage-data-entry.component';

describe('ManageDataEntryComponent', () => {
  let component: ManageDataEntryComponent;
  let fixture: ComponentFixture<ManageDataEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDataEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
