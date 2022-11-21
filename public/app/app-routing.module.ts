import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseComponent } from './database/database.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { MobileComponent } from './mobile/mobile.component';
import { ModelingComponent } from './modeling/modeling.component';
import { OperatingSystemsComponent } from './operating-systems/operating-systems.component';
import { OthersComponent } from './others/others.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgrammingComponent } from './programming/programming.component';
import { ProjectsComponent } from './projects/projects.component';
import { ToolsComponent } from './tools/tools.component';
import { WebComponent } from './web/web.component';

const routes: Routes = [
  { path: 'education', component: EducationComponent },
  { path: 'web', component: WebComponent },
  { path: 'programming', component: ProgrammingComponent },
  { path: 'databases', component: DatabaseComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'operating', component: OperatingSystemsComponent },
  { path: 'others', component: OthersComponent }, 
  { path: 'modeling', component: ModelingComponent },
  {path:'',component:ProfileComponent}, 
  {path:'languages',component:LanguagesComponent}, 

   { path: 'projects', component: ProjectsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
