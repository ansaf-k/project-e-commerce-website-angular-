import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { product } from '../../data-type';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-seller-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent implements OnInit {

  private _snackBar = inject(MatSnackBar);
  addProductMessage: string | undefined;
  constructor(private product: ProductService) { }

  ngOnInit(): void {

  }

  submit(data: product, form: NgForm) {
    console.warn(data);
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = "Product Added Successfully";
        this.openSnackBar(this.addProductMessage);
        form.reset();
      }
      setTimeout(() => {
        this.addProductMessage = undefined;
      }, 3000);
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['.my-snackbar'],
    });
  }

}
