import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { EditorComponent } from './shared/editor/editor.component';
import {NgxWigModule} from 'ngx-wig';
import { HttpService } from './core/services/http/http.service';
import { ProjectService } from './core/services/project/project.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWigModule,
    HttpClientModule
  ],
  providers: [HttpService,ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
