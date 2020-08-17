import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { QuotePage } from './quote/quote.page';
import { WordsOfWisdomDbService } from './words-of-wisdom-db.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { UserSettingService, QuotesService } from './shared/services';

@NgModule({
  declarations: [AppComponent,  QuotePage],
  entryComponents: [QuotePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: InitApp,
    //   multi: true,
    //   deps: [UserSettingService, QuotesService]
    // },
    QuotesService,
    UserSettingService,
    StatusBar,
    SplashScreen,
    WordsOfWisdomDbService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private userSettingService:UserSettingService, private quoteService: QuotesService ){
    this.userSettingService.InitializeDb();
    this.quoteService.InitializeDb();

  }
}

export function InitApp(userSettingService:UserSettingService, quoteService: QuotesService) {
    
}
