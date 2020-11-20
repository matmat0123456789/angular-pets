import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetsListComponent} from '../pets-list/pets-list.component';
import {MyAccountComponent} from '../my-account/my-account.component';
import {PetProfileComponent} from '../pet-profile/pet-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'Pets', pathMatch: 'full' },
  {path: 'Home', redirectTo: 'Pets', pathMatch: 'full' },
  { path: 'Pets', component: PetsListComponent },
  {path: 'PetProfile', component: PetProfileComponent},
  {path: 'MyAccount', component: MyAccountComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}