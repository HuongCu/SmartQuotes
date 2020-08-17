import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { QuotesService } from './services/quotes/quotes.service';
import { UserSettingService } from './services/user-settings/user-settings.service';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppFooterComponent, AppHeaderComponent],
  entryComponents: [],
  imports: [
      IonicModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule  
  ],
  providers: [
    SQLite,
    QuotesService,
    UserSettingService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [AppFooterComponent, AppHeaderComponent],
  bootstrap: []
})
export class SharedModule {}
