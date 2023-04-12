import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyListComponent } from './assembly-list.component';

describe('AssemblyListComponent', () => {
  let component: AssemblyListComponent;
  let fixture: ComponentFixture<AssemblyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
