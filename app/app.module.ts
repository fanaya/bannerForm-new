import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import  { AppComponent } from './app.component';

/* Featured Imports */
import { ContactModule }      from './contact/contact.module';
import { CoreModule }     from './core/core.module';
import { routing }        from './app.routing';

@NgModule({
  imports:  [ 
    BrowserModule,
    ContactModule,
/*
    CoreModule,
*/
    CoreModule.forRoot({userName: 'Miss Marple'}),
    routing
     ],
  declarations: [ AppComponent ],
  bootstrap:    [AppComponent]  
})
export class AppModule { }
