import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsDoneComponent } from './transactions-done.component';

describe('TransactionsDoneComponent', () => {
  let component: TransactionsDoneComponent;
  let fixture: ComponentFixture<TransactionsDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
