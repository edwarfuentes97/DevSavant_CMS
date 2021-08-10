import {Component, OnInit} from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {BottomSheetOverviewComponent} from "../../components/bottom-sheet-overview/bottom-sheet-overview.component";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-cms',
  templateUrl: './edit-cms.component.html',
  styleUrls: ['./edit-cms.component.scss']
})
export class EditCmsComponent implements OnInit {
  userName: string = environment.userName;

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewComponent).afterDismissed().subscribe( (type: string)=> {
      EditCmsComponent.fnAddWidget(type);
    });
  }


  private static fnAddWidget(type: string) {
    console.log('type' , type)
  }
}
