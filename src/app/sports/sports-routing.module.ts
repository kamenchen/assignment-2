import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsPage } from './sports.page';

const routes: Routes = [
  {
    path: '',
    component: SportsPage
  },
  {
    path: 'answer',
    loadChildren: () => import('./answer/answer.module').then( m => m.AnswerPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./comments/comments.module').then( m => m.CommentsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsPageRoutingModule {}
