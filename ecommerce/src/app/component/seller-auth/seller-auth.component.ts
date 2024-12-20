import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../../services/seller.service';
import { Router,RouterModule } from '@angular/router';
import { SignUp } from '../../data-type';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller:SellerService,private router:Router) {}
  showLogin = false;
  authError:string = '';

  ngOnInit():void{
    this.seller.reloadSeller()
  }

  signUp(data:SignUp):void {
    this.seller.userSignUp(data); 
  }

  login(data:SignUp):void {
    this.authError = "";
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password is not correct";
      }
    })
  }

  openLogin(){
    this.showLogin = true;
  }

  openSignup(){
    this.showLogin = false;
  }
}
