import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
// Forms directive
import { FormsModule } from '@angular/forms';
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CivilizationsComponent } from './components/civilizations/civilizations.component';
//Services
import { CivilizationsService } from './services/civilizations.service';
//Module HTTP
import { HttpClientModule } from '@angular/common/http';

import { ObjToArrayPipe } from './components/civilizations/objArray.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CivilizationsComponent,
    ObjToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    //Routes
    RouterModule.forRoot([
      { path: '' , component: HomeComponent },
      { path: 'civilizations' , component: CivilizationsComponent },
      { path: '**' , redirectTo: '/' , pathMatch: 'full'}
    ]),
    HttpClientModule,
  ],
  providers: [
    CivilizationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }