import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Routes
import { RouterModule } from '@angular/router';
// Forms directive
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CivilizationsComponent } from './components/civilizations/civilizations.component';
import { SearchComponent } from './components/search/search.component';
//Services
import { CivilizationsService } from './services/civilizations.service';
//Module HTTP
import { HttpClientModule } from '@angular/common/http';
// Objs Pipe
import { ObjToArrayPipe } from './components/civilizations/objArray.pipe';
import { SearchPipe } from './components/search/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CivilizationsComponent,
    SearchComponent,
    ObjToArrayPipe,
    SearchPipe
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
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    CivilizationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }