import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
  MatCardModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';
import 'hammerjs';


import { AppComponent } from './app.component';
import { FileCardComponent } from './file-card/file-card.component';


@NgModule({
  declarations: [
    AppComponent,
    FileCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
