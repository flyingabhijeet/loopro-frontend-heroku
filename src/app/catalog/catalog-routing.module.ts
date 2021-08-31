import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { ViewComponent } from './view/view.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '', 
        component: CatalogComponent, 
        children: [ 
          { path: 'all', component: ViewComponent },
          { path: 'detail', component: DetailComponent}
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
