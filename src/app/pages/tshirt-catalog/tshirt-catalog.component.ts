import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ITshirt } from '../../interfaces/tshirt.interface';
import { TshirtCardComponent } from '../../components/tshirt-card/tshirt-card.component';
import { TshirtCatalogService } from '../../services/tshirt-catalog.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tshirt-catalog',
  standalone: true,
  imports: [ NgFor, NgIf, TshirtCardComponent, RouterOutlet],
  templateUrl: './tshirt-catalog.component.html',
  styleUrl: './tshirt-catalog.component.css'
})
export class TshirtCatalogComponent implements OnInit {
  @Output() addTshirtToCart: EventEmitter<ITshirt> = new EventEmitter(); 
  // tshirtList: Array<ITshirt>
  teste: string = 'ABC';
  tshirtList: ITshirt[] = [];

  constructor(private tshirtCatalogService: TshirtCatalogService) {
    
  }

  ngOnInit() {
    this.tshirtList = this.tshirtCatalogService.getAllTshirt();
  }

  warnAboutAddTshirtToCart(tshirt: ITshirt) {
    //console.log("Adicionar ao carrinho");
    //console.log(tshirt);
    this.addTshirtToCart.emit(tshirt);    
  }
}

