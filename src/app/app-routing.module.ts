import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewContractComponent } from './new-contract/new-contract.component';
import { SearchRoomsComponent } from './search-rooms/search-rooms.component';

const routes: Routes = [
   {path: '', component: SearchRoomsComponent},
  {path: 'contract/new', component: NewContractComponent}
  // {path: "**" , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NewContractComponent, PageNotFoundComponent, SearchRoomsComponent]
