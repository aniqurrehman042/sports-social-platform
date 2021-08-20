import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordsComponent } from './pages/records/records.component';
import { SaveRecordsComponent } from './pages/save-records/save-records.component';

const routes: Routes = [
  {
    path: 'records/:type',
    component: RecordsComponent
  },
  {
    path: 'save-records/:type/:category',
    component: SaveRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
