import { Routes } from '@angular/router';

export const DEFAULT_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchModule)
    },
    {
        path: 'users',
        loadChildren: () => import('../user-management/users.module').then(m => m.UsersModule)
    },
    {
        path: 'digitization',
        loadChildren: () => import('../digitization/digitization.module').then(m => m.DigitizationModule)
    },
    {
        path: 'masterdata',
        loadChildren: () => import('../master-data/master-data.module').then(m => m.MasterDataModule)
    }
]