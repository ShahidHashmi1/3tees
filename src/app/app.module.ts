import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BagdialogComponent } from './bagdialog/bagdialog.component';
import { IrCheckboxComponent } from './ir-checkbox/ir-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    BagdialogComponent,
    IrCheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
