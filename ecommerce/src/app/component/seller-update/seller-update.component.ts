import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { product } from '../../data-type';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-seller-update',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,MatFormFieldModule,MatCardModule],
  templateUrl: './seller-update.component.html',
  styleUrl: './seller-update.component.css'
})
export class SellerUpdateComponent implements OnInit {

  private _snackBar = inject(MatSnackBar);
  productData: undefined | product;
  constructor(private route: ActivatedRoute, private router: Router,) { }
  product = inject(ProductService);

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((data) => {
      console.warn(data);
      this.productData = data;
    })
  }


  openSnackBar() {
    this._snackBar.open('Product has updated', '', {
      duration: 2000,
      panelClass: ['.my-snackbar'],
    });
  }

  UpdateProduct(data: any) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.product.UpdateProduct(data).subscribe((res) => {
      this.openSnackBar();
    });
    this.router.navigate(['/seller-home']);
  }

}
