import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ViewComponent } from './view/view.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    ViewComponent,
    CatalogComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
