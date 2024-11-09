import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../data-type';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [CommonModule,CurrencyPipe,RouterModule],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit {

  private _snackBar = inject(MatSnackBar);
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
        this.openSnackBar(this.productMessage);
        this.list()
      }
    })

    setTimeout(()=>{
      this.productMessage=undefined
    },2000); 
  }

  openSnackBar(message:string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['.my-snackbar'],
    });
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
