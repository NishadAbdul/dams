import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSessionTypeComponent } from './manage-session-type.component';

describe('ManageSessionTypeComponent', () => {
  let component: ManageSessionTypeComponent;
  let fixture: ComponentFixture<ManageSessionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSessionTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSessionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
