import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { HeaderComponent } from './header/header.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SuppliersDetailsComponent } from './suppliers/suppliers-details/suppliers-details.component';
import { SuppliersItemComponent } from 'src/app/suppliers/suppliers-list/suppliers-item/suppliers-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { AddSuppliersComponent } from './suppliers/suppliers-list/add-suppliers/add-suppliers.component';
import { suppliersService } from 'src/app/suppliers/suppliers.service';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    SuppliersComponent,
    HeaderComponent,
    SuppliersListComponent,
    SuppliersDetailsComponent,
    SuppliersItemComponent,
    AddSuppliersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [suppliersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
