import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsMainComponent } from '../../pages/cms-main/cms-main.component';

const routes: Routes = [
  {path:'', component:CmsMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmscontentRoutingModule { }
