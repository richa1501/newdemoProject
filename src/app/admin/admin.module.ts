import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { MaterialModule } from '../material/mateial.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardUiComponent } from './components/dashboard-ui/dashboard-ui.component';
import { PostModelComponent } from './components/post-model/post-model.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";






@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    PostComponent, 
   DashboardUiComponent, PostModelComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,MaterialModule,SharedModule,ReactiveFormsModule,FormsModule,NgDynamicBreadcrumbModule
  ]
})
export class AdminModule { }
