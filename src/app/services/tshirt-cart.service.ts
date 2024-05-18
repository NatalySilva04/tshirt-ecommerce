import { Injectable } from '@angular/core';
import { ITshirt } from '../interfaces/tshirt.interface';

@Injectable({
  providedIn: 'root'
})
export class TshirtCartService {

  addedTshirtList: ITshirt[] = [];

  constructor() {
    this.addedTshirtList = this.getAllTshirt();
  }

  getAllTshirt() {
    return JSON.parse(localStorage.getItem("addedTshirtList") || "[]");
  }

  findOrAddTshirt(tshirt?: ITshirt) {
    // Checando se a camiseta que estou buscando já está no carrinho
    for (let i=0; i<this.addedTshirtList.length; i++) {
      const currTshirt = this.addedTshirtList[i];
      if (tshirt?._id === currTshirt._id) {
        currTshirt.totalAddedToCart = (currTshirt.totalAddedToCart < currTshirt.totalInStock)? currTshirt.totalAddedToCart + 1 : currTshirt.totalAddedToCart;
        localStorage.setItem("addedTshirtList", JSON.stringify(this.addedTshirtList));
        return;
      }
    }

    // Adicionando mais uma camiseta do mesmo modelo ao carrinho
    if (tshirt) {
      tshirt.totalAddedToCart = 1;
      this.addedTshirtList.push(tshirt);
    }

    localStorage.setItem("addedTshirtList", JSON.stringify(this.addedTshirtList));
  }

  findTshirtIndexById(tshirtId: string){
    const tshirtIndex = this.addedTshirtList.findIndex((currTshirt => {
      return currTshirt._id === tshirtId;
    }));

    return tshirtIndex;
  }

  removeTshirtFromCart(tshirtId: string) {
    const tshirtIndex = this.findTshirtIndexById(tshirtId);
    this.addedTshirtList.splice(tshirtIndex, 1);
  }

  incrementTotalTshirtCopies(tshirtId: string) {
    const tshirtIndex = this.findTshirtIndexById(tshirtId);
    const tshirt = this.addedTshirtList[tshirtIndex];

    tshirt.totalAddedToCart++;
    if (tshirt.totalAddedToCart > tshirt.totalInStock) {
      tshirt.totalAddedToCart = tshirt.totalInStock;
    }

    localStorage.setItem("addedTshirtList", JSON.stringify(this.addedTshirtList));
  }

  decrementTotalTshirtCopies(tshirtId: string) {
    const tshirtIndex = this.findTshirtIndexById(tshirtId);
    const tshirt = this.addedTshirtList[tshirtIndex];

    tshirt.totalAddedToCart--;

    if(tshirt.totalAddedToCart <= 0) {
      this.removeTshirtFromCart(tshirtId);
    }

    localStorage.setItem("addedTshirtList", JSON.stringify(this.addedTshirtList));
  }
}