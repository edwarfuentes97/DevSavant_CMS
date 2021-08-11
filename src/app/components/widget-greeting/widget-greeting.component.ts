import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-greeting',
  templateUrl: './widget-greeting.component.html',
  styleUrls: ['./widget-greeting.component.scss']
})
export class WidgetGreetingComponent implements OnInit {

  public date: Date = new Date();
  @Input() userName: string | undefined;
  @Input() index: number | undefined;
  public clock: Date = new Date();

  constructor() {
    setInterval(() => {
      this.clock = new Date();
    }, 1);
  }

  ngOnInit(): void {
  }

}
