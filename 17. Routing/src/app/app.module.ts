import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterModule} from '@angular/router';
import { RouteModule } from './route.module';
import { routingComps } from './route.module';

@NgModule({
  imports:      [ BrowserModule, RouteModule ],
  declarations: [ AppComponent, routingComps ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
