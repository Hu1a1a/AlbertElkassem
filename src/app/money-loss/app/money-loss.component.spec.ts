import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyLossComponent } from './money-loss.component';

describe('MoneyLossComponent', () => {
  let component: MoneyLossComponent;
  let fixture: ComponentFixture<MoneyLossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyLossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
