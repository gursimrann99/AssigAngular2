import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './filter.pipe';

import { AppComponent }  from './app.component';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UsersComponent, FilterPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
