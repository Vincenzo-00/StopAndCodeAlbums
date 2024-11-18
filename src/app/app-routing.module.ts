import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';

const routes: Routes = [
  {
    path: "", component: HomepageComponent
  },
  {
    path: "albums", component: AlbumsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
