import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'send-data', loadChildren: './send-data/send-data.module#SendDataPageModule' },
  { path: 'australiya', loadChildren: './countryes/australiya/australiya.module#AustraliyaPageModule' },
  { path: 'vengr', loadChildren: './countryes/vengr/vengr.module#VengrPageModule' },
  { path: 'velik', loadChildren: './countryes/velik/velik.module#VelikPageModule' },
  { path: 'grec', loadChildren: './countryes/grec/grec.module#GrecPageModule' },
  { path: 'germany', loadChildren: './countryes/germany/germany.module#GermanyPageModule' },
  { path: 'belgi', loadChildren: './countryes/belgi/belgi.module#BelgiPageModule' },
  { path: 'avstryia', loadChildren: './countryes/avstryia/avstryia.module#AvstryiaPageModule' },
  { path: 'bolg', loadChildren: './countryes/bolg/bolg.module#BolgPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
