import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './../../app-routing.module';

import { HPALMComponent } from './../../features/all-services/hpalm/hpalm.component';
import { RtcComponent } from './../../features/all-services/rtc/rtc.component';
import { GithubComponent } from './../..//features/all-services/github/github.component';
import { CepComponent } from './../..//features/all-services/cep/cep.component';
import { WorksmartComponent } from './../..//features/all-services/worksmart/worksmart.component';
import { SfdbComponent } from './../..//features/all-services/sfdb/sfdb.component';
import { ClearcaseComponent } from './../..//features/all-services/clearcase/clearcase.component';
import { ClearquestComponent } from './../..//features/all-services/clearquest/clearquest.component';
import { AlmOctaneComponent } from './../..//features/all-services/alm-octane/alm-octane.component';
import { CitrixclientComponent } from './../..//features/all-services/citrixclient/citrixclient.component';
import { ServiceowComponent } from './../..//features/all-services/serviceow/serviceow.component';
import { AppscanComponent } from './../..//features/all-services/appscan/appscan.component';


@NgModule({
  declarations: [
    HPALMComponent,
    RtcComponent,
    GithubComponent,
    CepComponent,
    WorksmartComponent,
    SfdbComponent,
    ClearcaseComponent,
    ClearquestComponent,
    AlmOctaneComponent,
    CitrixclientComponent,
    ServiceowComponent,
    AppscanComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
  ]
})
export class AllServicesModule { }
