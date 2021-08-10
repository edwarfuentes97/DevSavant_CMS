import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmscontentRoutingModule } from './cmscontent-routing.module';
import { CmsMainComponent } from '../../pages/cms-main/cms-main.component';



// Material Modules
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {EditCmsComponent} from "../../pages/edit-cms/edit-cms.component";
import {PreviewCmsComponent} from "../../pages/preview-cms/preview-cms.component";
import {MatButtonModule} from "@angular/material/button";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [
    CmsMainComponent,
    EditCmsComponent,
    PreviewCmsComponent
  ],
  imports: [
    CommonModule,
    CmscontentRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule
  ]
})
export class CmscontentModule { }
