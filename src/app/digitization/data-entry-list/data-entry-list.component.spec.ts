import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryListComponent } from './data-entry-list.component';

describe('DataEntryListComponent', () => {
  let component: DataEntryListComponent;
  let fixture: ComponentFixture<DataEntryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
