import { HomeServiceService } from './home-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SearchPipe } from './search.pipe';
import { FormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { FilterbarComponent } from './filterbar/filterbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeContentComponent,
    SearchPipe,
    DetailsComponent,
    FilterbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
    
  ],
  providers: [HomeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
