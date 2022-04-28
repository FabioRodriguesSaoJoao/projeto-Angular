import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPagComponent } from './login-pag/login-pag.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    LoginPagComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class LoginModule {}
 