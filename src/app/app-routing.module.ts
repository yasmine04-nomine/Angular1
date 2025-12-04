import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { ListSuggestionsComponent } from './core/list-suggestions/list-suggestions.component';

const routes: Routes = [
  // Route par défaut
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  // Route home
  { path: 'home', component: HomeComponent },
  
  // Route ancienne (gardée pour compatibilité)
  { path: 'listSuggestion', component: ListSuggestionsComponent },
  
  // ✨ NOUVEAU : Lazy loading pour suggestions
  { 
    path: 'suggestions', 
    loadChildren: () => import('./features/suggestions/suggestions.module')
      .then(m => m.SuggestionsModule) 
  },
  
  // ✨ NOUVEAU : Lazy loading pour users
  { 
    path: 'users', 
    loadChildren: () => import('./features/users/users.module')
      .then(m => m.UsersModule) 
  },
  
  // Route 404 - TOUJOURS EN DERNIER
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }