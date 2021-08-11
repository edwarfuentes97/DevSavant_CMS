import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../../services/data-service.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-preview-cms',
  templateUrl: './preview-cms.component.html',
  styleUrls: ['./preview-cms.component.scss']
})
export class PreviewCmsComponent implements OnInit {

  userName: string = environment.userName;
  constructor(public dataService: DataServiceService) { }

  ngOnInit(): void {
  }

}
