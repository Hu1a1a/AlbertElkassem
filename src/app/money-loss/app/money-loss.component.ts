import { Component, OnInit } from '@angular/core';
import { MoneyLossService } from '../service/money-loss.service';

@Component({
  selector: 'app-money-loss',
  templateUrl: './money-loss.component.html',
  styleUrls: ['./money-loss.component.css']
})
export class MoneyLossComponent implements OnInit {
  constructor(
    private MoneyLossService: MoneyLossService,
  ) { }
  ngOnInit(): void {
    setInterval(() => {
      this.Money += Math.floor(Math.random() * 100)
    }, 1000)
  }
  Money: number = 1000;
  button: boolean[] = [false, false, false, false];
  Donation(i: number) {
    this.button = [false, false, false, false]
    this.button[i] = true
  }
}
