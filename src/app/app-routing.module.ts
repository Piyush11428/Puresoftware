import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerModule } from './modules/broker/broker.module';
import { BrokerComponent } from './modules/broker/broker/broker.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

   routes: Routes = [
    { path: 'heroes', component: BrokerComponent }
  ];

 }
