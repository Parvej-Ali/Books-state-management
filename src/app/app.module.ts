import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/reducer/books.reducer';
import { collectionReducer } from './store/reducer/collection.reducer';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/effect/books.effects';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    HttpClientModule,
    MatButtonModule,
    EffectsModule.forRoot([BooksEffects]),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
