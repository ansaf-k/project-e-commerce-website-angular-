import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menuType: String ='default';
  constructor(private route: Router) { }

  ngOnInit(): void {
    
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.warn("in seller area")
          this.menuType = "seller"
        } else {
          console.warn("outside seller")
          this.menuType = "default"
        }
      }
    })
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }

}
