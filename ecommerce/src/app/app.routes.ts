import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SellerAuthComponent } from './component/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './component/seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './component/seller-add-product/seller-add-product.component';
import { SellerUpdateComponent } from './component/seller-update/seller-update.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'seller-auth',
        component:SellerAuthComponent
    },
    {
        path:'seller-home',
        component:SellerHomeComponent,
        canActivate:[authGuard]
    },
    {
        path:'seller-add-product',
        component:SellerAddProductComponent,
        canActivate:[authGuard]
    },
    {
        path:'seller-update-product/:id',
        component:SellerUpdateComponent,
        canActivate:[authGuard]
    }
];
