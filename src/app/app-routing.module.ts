import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { VisitorEntryFormComponent } from './visitor-entry-form/visitor-entry-form.component';
import { NewsListComponent } from './news-list/news-list.component';

const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'form', component: VisitorEntryFormComponent },
  { path: 'list', component: VisitorListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
