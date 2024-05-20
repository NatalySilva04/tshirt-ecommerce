// import { Component, OnInit } from '@angular/core';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatButtonModule } from '@angular/material/button';
// import { provideNativeDateAdapter } from '@angular/material/core';
// import { ITshirt } from '../../interfaces/tshirt.interface';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-tshirt-create',
//   standalone: true,
//   imports: [ MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, FormsModule ],
//   providers: [ provideNativeDateAdapter() ],
//   templateUrl: './tshirt-create.component.html',
//   styleUrl: './tshirt-create.component.css'
// })
// export class TshirtCreateComponent implements OnInit {
//   tshirtList: ITshirt[] = [];
//   newTshirt: ITshirt = {
//     "id": 1,
//     "nome": "T-shirt",
//     "categoria": "feminina",
//     "preco": 59.99,
//     "tamanho": "P, M, G, GG",
//     "cor": "PretA, Branca",
//     "descricao": "Camiseta branca de algodão com a frase "..."",     
//     "totalInStock": 20,
//     "totalAddedToCart": 0,
//   };

//   ngOnInit() {
//     this.tshirtList = JSON.parse(localStorage.getItem("tshirtList") || "[]");
//   }

//   // changeTitleValue(event: Event) {
//   //   const target = event.target as HTMLInputElement;
//   //   this.newTshirt.title = target.value;
//   //   console.log(this.newTshirt);
//   // }

//   submitForm() {
//     console.log(this.newTshirt);
//     this.TshirtList.push(this.newTshirt);
//     localStorage.setItem("tshirtList", JSON.stringify(this.tshirtList));
//   }
// }