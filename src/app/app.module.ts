import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import {MatInputModule} from '@angular/material/input';
import { PropertyBidingComponent } from './property-biding/property-biding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { TwoWayDatabindComponent } from './two-way-databind/two-way-databind.component';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { NgStyleComponent } from './ng-style/ng-style.component';
import {MatRadioModule} from '@angular/material/radio';
import { NgClassComponent } from './ng-class/ng-class.component';



@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBidingComponent,
    EventBindingComponent,
    TwoWayDatabindComponent,
    NgStyleComponent,
    NgClassComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSelectModule,
    FormsModule,
    MatDividerModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
