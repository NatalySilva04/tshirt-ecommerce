import { Routes } from '@angular/router';


import { TshirtCatalogComponent } from './pages/tshirt-catalog/tshirt-catalog.component';
import { TshirtCreateComponent } from './pages/tshirt-create/tshirt-create.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'tshirt',
    component: TshirtCatalogComponent,
    // children: [
    //   { path: 'create', component: TshirtCreateComponent },
    //   { path: 'update/:id', component: TshirtCreateComponent },
    // ]
  },
  { path: 'tshirt/create', component: TshirtCreateComponent, canActivate: [authGuard] },
  { path: 'tshirt/update/:id', component: TshirtCreateComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "tshirt", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

