import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AuthGuardGuard } from './_helpers/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'account', loadChildren: './account/account.module#AccountModule' },
  { path: 'products', component: ProductsListComponent, canActivate: [AuthGuardGuard] },
  { path: 'products/:id', component: ProductDetailsComponent, canActivate: [AuthGuardGuard] },
  { path: 'add', component: AddProductComponent, canActivate: [AuthGuardGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
