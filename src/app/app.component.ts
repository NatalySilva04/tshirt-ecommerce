import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { TshirtCatalogComponent } from './pages/tshirt-catalog/tshirt-catalog.component';
import { TshirtCartComponent } from './components/tshirt-cart/tshirt-cart.component';
import { TshirtCreateComponent } from './pages/tshirt-create/tshirt-create.component';

import { ITshirt } from './interfaces/tshirt.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatIconModule,
    HeaderComponent,
    TshirtCatalogComponent,
    TshirtCartComponent,
    TshirtCreateComponent, 
  ],
  templateUrl: './app.component.html',
  // template: `
  //   <h1>Hello, {{ title }}</h1>

  //   <router-outlet />
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title: string = "it's me you're looking for...";
  addedTshirtList: ITshirt[] = [];

  ngOnInit() {
    this.addedTshirtList = JSON.parse(localStorage.getItem("addedTshirtList") || "[]");
  }

  // findOrAddTshirt(tshirt: ITshirt) {
  //   // Checando se o livro que estou buscando já está no carrinho
  //   for (let i=0; i<this.addedTshirtList.length; i++) {
  //     const currTshirt = this.addedTshirtList[i];
  //     if (tshirt.id === currTshirt.id) {
  //       currTshirt.totalAddedToCart = (tshirt.totalAddedToCart < tshirt.totalInStock)? currtshirt.totalAddedToCart + 1 : currtshirt.totalAddedToCart;
  //       return;
  //     }
  //   }

  //   // Adicionando uma cópia de um novo livro ao carrinho
  //   tshirt.totalAddedToCart = 1;
  //   this.addedTshirtList.push(tshirt);
  // }

  // addTshirtToCart(tshirt: ITshirt) {
  //   // console.log("Deu bom, cria! O livro vai ser adicionado ao carrinho.");

  //   this.findOrAddTshirt(tshirt);
  //   this.addedTshirtList = [...this.addedTshirtList]; // sobrescrevendo o array com uma cópia dele mesmo

  //   // console.log(this.addedTshirtList);
  // }
}