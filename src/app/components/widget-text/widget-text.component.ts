import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.scss']
})
export class WidgetTextComponent implements OnInit {
  RichTextValue: any;

  constructor() { }

  ngOnInit(): void {
  }

  showRichText(){
    console.log(this.RichTextValue)
  }

}
