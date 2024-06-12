import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SupportQueryComponent } from './support-query/support-query.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RegisteredCustomersComponent } from './registered-customers/registered-customers.component';
import { CreatedAccountsComponent } from './created-accounts/created-accounts.component';
import { TransactionsDoneComponent } from './transactions-done/transactions-done.component';

const routes: Routes = [
  { path: 'transactions-done', component:TransactionsDoneComponent},
  { path: 'registered-customers', component:RegisteredCustomersComponent},
  { path: 'created-accounts', component:CreatedAccountsComponent},
  { path: 'firstpage', component:FirstpageComponent },
  { path: 'adminlogin', component:AdminloginComponent},
  { path: 'index', component:IndexComponent},
  { path: 'home', component:HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'customer', component: CustomerComponent },
  { path: 'account', component: AccountComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'support-query', component: SupportQueryComponent },
  { path: '', redirectTo: '/firstpage', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/firstpage' } // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
