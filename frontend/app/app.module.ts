import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule}    from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent}   from './app.component';
import {TodoComponent}   from './todo/todo.component';
import {ListComponent}   from './list/list.component';
import {SelectorComponent}   from './selector/selector.component';

@NgModule({
    imports: [BrowserModule,
        AppRoutingModule,
        HttpModule],
    declarations: [AppComponent,
        TodoComponent, ListComponent, SelectorComponent],
    bootstrap: [AppComponent]
})


export class AppModule {
}

