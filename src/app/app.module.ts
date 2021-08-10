import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material

import { WidgetImageComponent } from './components/widget-image/widget-image.component';
import { WidgetTextComponent } from './components/widget-text/widget-text.component';
import { WidgetGreetingComponent } from './components/widget-greeting/widget-greeting.component';
import { BottomSheetOverviewComponent } from './components/bottom-sheet-overview/bottom-sheet-overview.component';
import {MatListModule} from "@angular/material/list";
import {MatLineModule} from "@angular/material/core";


@NgModule({
  declarations: [
    AppComponent,
    WidgetImageComponent,
    WidgetTextComponent,
    WidgetGreetingComponent,
    BottomSheetOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatLineModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    // components
    WidgetImageComponent,
    WidgetTextComponent,
    WidgetGreetingComponent,
    BottomSheetOverviewComponent
  ]
})
export class AppModule { }
