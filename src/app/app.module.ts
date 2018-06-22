import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { Material} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AgmCoreModule } from '@agm/core';
import { LoggerService } from './sdk/services';
import { AmbtrackingService } from './service/ambtracking.service';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    Material,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdSVjHDbegkjCfr0kznWrOkn01K-f5mIY'
     })
  ],
  providers: [AmbtrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
