import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSessionMgmntComponent } from './manage-session-mgmnt.component';

describe('ManageSessionMgmntComponent', () => {
  let component: ManageSessionMgmntComponent;
  let fixture: ComponentFixture<ManageSessionMgmntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSessionMgmntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSessionMgmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
