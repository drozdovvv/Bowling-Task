import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),

  ]
})
export class MainRoutingModule { }
