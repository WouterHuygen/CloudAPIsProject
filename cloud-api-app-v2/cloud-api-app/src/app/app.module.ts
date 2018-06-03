import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from './../environments/environment';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthService } from './core/auth.service';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './core/auth.guard';
import { BeerComponent } from './beer/beer.component';
import { HttpClientModule } from '@angular/common/http';
import { BeerService } from './core/beer.service';
import { OwnBeerService } from './core/own-beer.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    UserComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: "", redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
      { path: "home", component: HomeComponent },
      { path: "user", component: UserComponent, canActivate: [AuthGuard] },
      { path: "beer", component: BeerComponent, canActivate: [AuthGuard] },
    ], {useHash: true})
  ],
  providers: [AuthService, AuthGuard, BeerService, OwnBeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
