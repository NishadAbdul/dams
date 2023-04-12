import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionMgmntListComponent } from './session-mgmnt-list.component';

describe('SessionMgmntListComponent', () => {
  let component: SessionMgmntListComponent;
  let fixture: ComponentFixture<SessionMgmntListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionMgmntListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionMgmntListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
