import { ServiceowComponent } from './features/all-services/serviceow/serviceow.component';
import { AlmOctaneComponent } from './features/all-services/alm-octane/alm-octane.component';
import { AppscanComponent } from './features/all-services/appscan/appscan.component';
import { CitrixclientComponent } from './features/all-services/citrixclient/citrixclient.component';
import { ClearquestComponent } from './features/all-services/clearquest/clearquest.component';
import { ClearcaseComponent } from './features/all-services/clearcase/clearcase.component';
import { SfdbComponent } from './features/all-services/sfdb/sfdb.component';
import { CepComponent } from './features/all-services/cep/cep.component';
import { WorksmartComponent } from './features/all-services/worksmart/worksmart.component';
import { GithubComponent } from './features/all-services/github/github.component';
import { RtcComponent } from './features/all-services/rtc/rtc.component';
import { HPALMComponent } from './features/all-services/hpalm/hpalm.component';

import { ServicesComponent } from './features/services/services.component';
import { OverviewComponent } from './overview/overview.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = 
[
  {
    path:'',
    component:AppComponent,
    children: [{
      path:'',
      component:OverviewComponent
    }]
  },
  {
    path:'dashboard',
    component:DefaultComponent,
      children: [{
        path:'',
        component:DashboardComponent
      },
     
        {
          path:'services',
        component:ServicesComponent
        },
        {
          path:'hpalm',
          component:HPALMComponent
        },
        {
          path:'rtc',
          component:RtcComponent
        },
        {
          path:'github',
          component:GithubComponent
        },
        {
          path:'worksmart',
          component:WorksmartComponent
        },
        {
          path:'cep',
          component:CepComponent
        },
        {
          path:'sfdb',
          component:SfdbComponent
        },
        {
          path:'clearcase',
          component:ClearcaseComponent
        },
        {
          path:'clearquest',
          component:ClearquestComponent
        },
        {
          path:'citrixclient',
          component:CitrixclientComponent
        },
        {
          path:'appscan',
          component:AppscanComponent
        },
        {
          path:'alm-octane',
          component:AlmOctaneComponent
        },
        {
          path:'servicenow',
          component:ServiceowComponent
        }
      ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
