import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ProductService } from '../../services/product.service';
import { product } from '../../data-type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgbModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  product = inject(ProductService);
  popularProduct:undefined | product[];
  trendyProduct:undefined | product[];
  

  ngOnInit(): void {
      this.product.productList().subscribe((data) => {
        console.warn(data);
        this.popularProduct = data;
      })

      this.product.trendyProduct().subscribe((data) => {
        console.warn(data);
        this.trendyProduct = data;
      })
  }
}
