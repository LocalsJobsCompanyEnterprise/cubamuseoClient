import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalesComponent } from './tales/tales.component';

const routes: Routes = [
  { path: 'tales',
  component: TalesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalesRoutingModule { }
