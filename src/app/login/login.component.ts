import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  form = new FormGroup(
    {
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    }
  );

  onSubmit(){
    console.log(this.form.value);
  }

  constructor(private authService: AuthenticationServiceService, private route: Router){}

  private authenticationLocalStorageToken = 'token';

  onLogin(){
    const formData = this.form.value;
    this.authService.onLogin(formData).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem(this.authenticationLocalStorageToken, response.token);
        this.route.navigateByUrl('/dashboard')
      }
    );
    console.log('form', this.form);
    console.log(this.form.status);
  }
}
