import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedAccountsComponent } from './created-accounts.component';

describe('CreatedAccountsComponent', () => {
  let component: CreatedAccountsComponent;
  let fixture: ComponentFixture<CreatedAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
