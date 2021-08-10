import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";


@Component({
  selector: 'app-bottom-sheet-overview',
  templateUrl: './bottom-sheet-overview.component.html',
  styleUrls: ['./bottom-sheet-overview.component.scss']
})
export class BottomSheetOverviewComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewComponent>) {}

  openLink(event: MouseEvent , type: string): void {
    this._bottomSheetRef.dismiss(type);
    event.preventDefault();
  }


  ngOnInit(): void {
  }

}
