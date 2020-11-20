import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {MatTableModule, MatTabsModule, 
MatSidenavModule, MatIconModule, MatButtonModule,
MatToolbarModule, MatListModule, MatFormFieldModule, MatOptionModule,
MatSelectModule, MatInputModule, MatCardModule,MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NavigationListComponent } from './navigation-list/navigation-list.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { MessageComponent } from './message/message.component';
import {ImagesGalleryComponent} from '../Components/images-gallery/images-gallery.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule, 
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule, 
    FormsModule, 
    MatTableModule,
    MatTabsModule,
    AppRoutingModule,
    MatButtonModule,
    FlexLayoutModule ],
  declarations: [ AppComponent, PetsListComponent, MainMenuComponent, NavigationListComponent, MyAccountComponent, FooterComponent, SearchComponent, PetProfileComponent, PetCardComponent, MessageComponent, ImagesGalleryComponent],
  bootstrap:    [ AppComponent, FooterComponent ]
})
export class AppModule { }
