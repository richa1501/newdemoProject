import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material/mateial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import {  NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { NgIdleModule } from '@ng-idle/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { ToastrModule } from 'ngx-toastr';
// import { MatTableExporterModule } from 'mat-table-exporter';





@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,    
    NgIdleModule.forRoot(),
    ToastrModule.forRoot({
      timeOut:3000,
      preventDuplicates: true,
    
    }),
     NgxUiLoaderModule,    
    NgxUiLoaderRouterModule.forRoot({
      showForeground:true,
    }), MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
