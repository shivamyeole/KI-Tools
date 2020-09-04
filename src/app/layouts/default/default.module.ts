

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../../app-routing.module';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from './../../features/dashboard/dashboard.component';
import { ServicesComponent } from './../../features/services/services.component';

import { AllServicesModule } from './../../features/all-services/all-services.module';
import { SharedModule } from './../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
   
    AllServicesModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
