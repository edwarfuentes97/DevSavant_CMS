import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.scss']
})
export class WidgetTextComponent implements OnInit {
  RichTextValue: any;
  @Input() index: number | undefined;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
  }

  showRichText(){
    this.newItemEvent.emit(this.RichTextValue)
  }

  saveData() {
    const currentTextEditor = this.dataService.dataPayload.find( elemento => elemento.index === this.index);
    if (currentTextEditor){
      currentTextEditor.text = this.RichTextValue;
    }
  }
}
