import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCustomersComponent } from './registered-customers.component';

describe('RegisteredCustomersComponent', () => {
  let component: RegisteredCustomersComponent;
  let fixture: ComponentFixture<RegisteredCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
