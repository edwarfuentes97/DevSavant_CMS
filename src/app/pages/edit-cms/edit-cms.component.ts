import {Component, OnInit} from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {BottomSheetOverviewComponent} from "../../components/bottom-sheet-overview/bottom-sheet-overview.component";
import { environment } from 'src/environments/environment';
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-edit-cms',
  templateUrl: './edit-cms.component.html',
  styleUrls: ['./edit-cms.component.scss']
})
export class EditCmsComponent implements OnInit {
  userName: string = environment.userName;
  private currentIndex = 0;

  constructor(
    private _bottomSheet: MatBottomSheet,
    public dataService: DataServiceService) {
  }

  ngOnInit(): void {
  }

  private fnAddWidget(type: string) {
    this.currentIndex++;
    type === 'text' ? this.dataService.dataPayload.push({index: this.currentIndex , text : 'text add'}) :
      type === 'image' ? this.dataService.dataPayload.push({index: this.currentIndex , images : 'image add'}) :
        type === 'greeting' ? this.dataService.dataPayload.push({index: this.currentIndex , greeting : true}): null;
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewComponent).afterDismissed().subscribe( (type: string)=> {
      this.fnAddWidget(type);
    });
  }

  fnShowData(){
    console.log(this.dataService.dataPayload)
  }

  showRichTextParen($event: string) {
    console.log('parent' , $event);
  }

}
