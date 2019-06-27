import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }
