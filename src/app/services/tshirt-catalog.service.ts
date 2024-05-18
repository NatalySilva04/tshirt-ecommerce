import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { ITshirt } from '../interfaces/tshirt.interface';

@Injectable({
  providedIn: 'root'
})
export class TshirtCatalogService {
  tshirtList: ITshirt[] = [];

  constructor() {
    console.log("Eu estou sendo executado!");
    this.tshirtList = this.getAllTshirt();
  }

  getAllTshirt() {
    return JSON.parse(localStorage.getItem("tshirtList") || "[]");
  }

  getTshirtById(tshirtId: string) {
    return this.tshirtList.find((b) => b._id == tshirtId);
  }

  createTshirt(tshirt: ITshirt) {
    tshirt._id = uuidv4();
    this.tshirtList.push(tshirt);
    localStorage.setItem("tshirtList", JSON.stringify(this.tshirtList));
  }

  updateTshirt(tshirt: ITshirt) {
    const index = this.tshirtList.findIndex((b) => b._id == tshirt._id);
    this.tshirtList[index] = tshirt;
    localStorage.setItem("tshirtList", JSON.stringify(this.tshirtList));
  }

  deleteTshirt(tshirtId: string) {
    const index = this.tshirtList.findIndex((b) => b._id == tshirtId);
    this.tshirtList.splice(index, 1);
    localStorage.setItem("tshirtList", JSON.stringify(this.tshirtList));
  }
}