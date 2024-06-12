import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SupportQueryComponent } from './support-query/support-query.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { RegisteredCustomersComponent } from './registered-customers/registered-customers.component';
import { CreatedAccountsComponent } from './created-accounts/created-accounts.component';
import { TransactionsDoneComponent } from './transactions-done/transactions-done.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AccountComponent,
    TransactionComponent,
    SupportQueryComponent,
    FeedbackComponent,
    LoginComponent,
    HomeComponent,
    IndexComponent,
    AdminloginComponent,
    FirstpageComponent,
    RegisteredCustomersComponent,
    CreatedAccountsComponent,
    TransactionsDoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
