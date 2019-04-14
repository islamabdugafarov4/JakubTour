import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', redirectTo:'login',pathMatch:'full' },
  { path: 'send-data', loadChildren: './send-data/send-data.module#SendDataPageModule' },
  { path: 'australiya', loadChildren: './countryes/australiya/australiya.module#AustraliyaPageModule' },
  { path: 'avstryia', loadChildren: './countryes/avstryia/avstryia.module#AvstryiaPageModule' },
  { path: 'belgi', loadChildren: './countryes/belgi/belgi.module#BelgiPageModule' },
  { path: 'bolg', loadChildren: './countryes/bolg/bolg.module#BolgPageModule' },
  { path: 'velik', loadChildren: './countryes/velik/velik.module#VelikPageModule' },
  { path: 'vengr', loadChildren: './countryes/vengr/vengr.module#VengrPageModule' },
  { path: 'grec', loadChildren: './countryes/grec/grec.module#GrecPageModule' },
  { path: 'germany', loadChildren: './countryes/germany/germany.module#GermanyPageModule' },
  { path: 'login', loadChildren: './validate/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './validate/register/register.module#RegisterPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
