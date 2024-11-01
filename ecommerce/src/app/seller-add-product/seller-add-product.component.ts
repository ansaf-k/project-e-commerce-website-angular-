import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent implements OnInit{
  addProductMessage:string|undefined;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
      
  }
  
  submit(data: product, form: NgForm){
    console.warn(data);
    this.product.addProduct(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.addProductMessage = "Product Added Successfully";
      }
      setTimeout(() => {
        this.addProductMessage=undefined;
        form.reset();
      }, 3000);
    })


  }

}
