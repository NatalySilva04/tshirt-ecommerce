import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

import { IClothes } from '../../interfaces/clothes.interface';
import { ClothesCardComponent } from '../../components/clothes-card/clothes-card.component';


@Component({
  selector: 'app-clothes-catalog',
  standalone: true,
  imports: [ NgFor, NgIf, ClothesCardComponent],
  templateUrl: './clothes-catalog.component.html',
  styleUrl: './clothes-catalog.component.css'
})
export class ClothesCatalogComponent {
  @Output() addClothesToCart: EventEmitter<IClothes> = new EventEmitter(); 
  teste: string = 'ABC';
  clothesList: IClothes[] = [
    {
      "id": 1,
      "nome": "T-shirt",
      "categoria": "feminino",
      "preco": 19.99, 
      "tamanho": "46, 48, 50, 52",
      "cor": "verde, preta",
      "descricao": "Camiseta branca de malha",
      "quantidade": 10,
    },    
    {
      "id": 2,
      "nome": "Vestido",
      "categoria": "feminino",
      "preco": 99.99, 
      "tamanho": "46, 48, 50, 52",
      "cor": "azul, vermelho, preto",
      "descricao": "Vestido midi azul",
      "quantidade": 5,
    },
    {
      "id": 3,
      "nome": "Bermuda",
      "categoria": "masculino",
      "preco": 89.99, 
      "tamanho": "50, 52, 54",
      "cor": "preta, cinza, azul",
      "descricao": "Bermuda com bolsos laterais",
      "quantidade": 15,
    },
    {
      "id": 4,
      "nome": "Calça Jeans masculina",
      "categoria": "masculino",
      "preco": 109.99, 
      "tamanho": "50, 52, 54",
      "cor": "preta",
      "descricao": "Calça jeans masculina com elástico na cintura",
      "quantidade": 8,
    },
    {
      "id": 5,
      "nome": "Calça Jeans Feminina",
      "categoria": "feminino",
      "preco": 109.99, 
      "tamanho": "46, 48, 50, 52",
      "cor": "preta, azul, verde",
      "descricao": "Calça jeans feminina de cós alto e elástico na cintura",
      "quantidade": 8,
    },
    {
      "id": 6,
      "nome": "Jaqueta básica com capuz em moletom",
      "categoria": "masculino",
      "preco": 149.99, 
      "tamanho": "G1, G2, G3, G4",
      "cor": "preta, azul, verde, cinza",
      "descricao": "JAQUETA BÁSICA MASCULINA PLUS SIZE COM CAPUZ EM MOLETOM",
      "quantidade": 5,
    },
  ];

  warnAboutAddClothesToCart(clothes: IClothes) {
    console.log("Adicionar ao carrinho");
    console.log(clothes);
    this.addClothesToCart.emit(clothes);
    
  }
}
