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
import {BottomSheetOverviewComponent} from "../../components/bottom-sheet-overview/bottom-sheet-overview.component";
import {MatListModule} from "@angular/material/list";
import {WidgetImageComponent} from "../../components/widget-image/widget-image.component";
import {WidgetTextComponent} from "../../components/widget-text/widget-text.component";
import {WidgetGreetingComponent} from "../../components/widget-greeting/widget-greeting.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {QuillModule} from "ngx-quill";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CmsMainComponent,
    EditCmsComponent,
    PreviewCmsComponent,
    BottomSheetOverviewComponent,
    WidgetImageComponent,
    WidgetTextComponent,
    WidgetGreetingComponent,
  ],
  imports: [
    CommonModule,
    CmscontentRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    QuillModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CmscontentModule { }
