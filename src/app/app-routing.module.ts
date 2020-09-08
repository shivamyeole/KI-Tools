import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { OverviewComponent } from './overview/overview.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ServicesComponent } from './features/services/services.component';
import { KiSupportComponent } from './features/ki_support/ki-support.component';

import { KiToolsMeasurementComponent } from './features/dashboard/ki-tools-measurement/ki-tools-measurement.component';
import { CustomerFeedbackComponent } from './features/dashboard/customer-feedback/customer-feedback.component';
import { SiteAvailabilityComponent } from './features/dashboard/site-availability/site-availability.component';

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

import { KiSlaComponent } from './features/ki_support/ki-sla/ki-sla.component';
import { NewProjectCreationComponent } from './features/ki_support/new-project-creation/new-project-creation.component';
import { TicketGuidelinesComponent } from './features/ki_support/ticket-guidelines/ticket-guidelines.component';

import { EntireTeamComponent } from './features/entire-team/entire-team.component';

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
      path:'KI_Tools_Measurement',
    component:KiToolsMeasurementComponent
    },
    {
      path:'Customer_Feedback',
      component:CustomerFeedbackComponent
    },
    {
      path:'Site_Availability',
      component:SiteAvailabilityComponent
    }]
  },

  {
    path:'services',
    component:DefaultComponent,
    children: [{
      path:'',
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
    }]
  },

  {
    path:'KI_Support',
    component:DefaultComponent,
    children: [{
      path:'',
      component:KiSupportComponent
    },
    {
      path:'Ticket_Guidelines',
    component:TicketGuidelinesComponent
    },
    {
      path:'New_Project_Creation',
      component:NewProjectCreationComponent
    },
    {
      path:'KI_SLA',
      component:KiSlaComponent
    }]
  },
  {
    path:'Entire_Team',
    component:DefaultComponent,
    children: [{
      path:'',
    component:EntireTeamComponent
    }]     
  }    
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
