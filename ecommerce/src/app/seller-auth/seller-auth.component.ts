import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router,RouterModule } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller:SellerService,private router:Router) {}

  ngOnInit():void{
    this.seller.reloadSeller()
  }

  signUp(data:SignUp):void {
    this.seller.userSignUp(data); 
  }
}
