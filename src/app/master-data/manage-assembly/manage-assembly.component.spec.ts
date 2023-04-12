import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAssemblyComponent } from './manage-assembly.component';

describe('ManageAssemblyComponent', () => {
  let component: ManageAssemblyComponent;
  let fixture: ComponentFixture<ManageAssemblyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAssemblyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
