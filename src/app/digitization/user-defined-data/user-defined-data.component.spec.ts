import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefinedDataComponent } from './user-defined-data.component';

describe('UserDefinedDataComponent', () => {
  let component: UserDefinedDataComponent;
  let fixture: ComponentFixture<UserDefinedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDefinedDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDefinedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
