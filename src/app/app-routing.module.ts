import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { VisitorEntryFormComponent } from './visitor-entry-form/visitor-entry-form.component';

const routes: Routes = [
  { path: '', component: VisitorListComponent },
  { path: 'form', component: VisitorEntryFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
