import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit {
  prductList: undefined | product[];
  productMessage: undefined | string;

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.list()
  }

  deleteProduct(id:number){
    console.log('delete product',id)

    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage = "Product is Deleted"
        this.list()
      }
    })

    setTimeout(()=>{
      this.productMessage=undefined
    },2000); 
  }

  list(){
    this.product.productList().subscribe((result) => {
      console.warn(result)
      if(result){
      this.prductList = result;
      }
    })
  }

}
