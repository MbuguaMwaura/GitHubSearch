import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyGithubComponent } from './my-github/my-github.component';
import { HttpClientModule } from '@angular/common/http';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { OtherComponent } from './other/other.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyGithubComponent,
    GitsearchComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
