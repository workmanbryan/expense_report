import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  isVisibles: any[] = [
    { "isVisible0": "hidden" },
    { "isVisible1": "hidden" },
    { "isVisible2": "hidden" },
    { "isVisible3": "hidden" },
    { "isVisible4": "hidden" },
    { "isVisible5": "hidden" },
    { "isVisible6": "hidden" },
  ]
  expensetotal: number = 478.33;
  percent: number = 2.4;
  percentdelta: string = `${this.percent}%`;
  weeklytotal: number = 227.94;
  highest: number = 0;
  days: any[] = [
    {
      "day": "mon",
      "amount": 17.45,
      "percent": (17.45/this.weeklytotal)*200
    },
    {
      "day": "tue",
      "amount": 34.91,
      "percent": (34.91/this.weeklytotal)*200
    },
    {
      "day": "wed",
      "amount": 52.36,
      "percent": (52.36/this.weeklytotal)*200
    },
    {
      "day": "thu",
      "amount": 31.07,
      "percent": (31.07/this.weeklytotal)*200
    },
    {
      "day": "fri",
      "amount": 23.39,
      "percent": (23.39/this.weeklytotal)*200
    },
    {
      "day": "sat",
      "amount": 43.28,
      "percent": (43.28/this.weeklytotal)*200
    },
    {
      "day": "sun",
      "amount": 25.48,
      "percent": (25.48/this.weeklytotal)*200
    }
  ];

  constructor(){}

  ngOnInit(): void {
      this.highestAmount();
  }

  highestAmount(){
    this.highest = Math.max(...this.days.map(day => day.amount));
  }

  mouseDown(i: number){
    this.isVisibles[i] = 'visible';
  }

  mouseUp(i: number){
    this.isVisibles[i] = 'hidden';
  }

}
