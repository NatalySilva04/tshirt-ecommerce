// import { Component, OnInit } from '@angular/core';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatButtonModule } from '@angular/material/button';
// import { provideNativeDateAdapter } from '@angular/material/core';
// import { ITshirt } from '../../interfaces/book.interface';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-book-create',
//   standalone: true,
//   imports: [ MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, FormsModule ],
//   providers: [ provideNativeDateAdapter() ],
//   templateUrl: './book-create.component.html',
//   styleUrl: './book-create.component.css'
// })
// export class BookCreateComponent implements OnInit {
//   booksList: ITshirt[] = [];
//   newBook: ITshirt = {
//     "id": 1,
//     "title": "Título do Livro",
//     "author": "Nome do Autor",
//     "description": "Descrição detalhada do livro",
//     "published_date": new Date(),
//     "price": 59.99,
//     "totalInStock": 20,
//     "totalAddedToCart": 0,
//   };

//   ngOnInit() {
//     this.booksList = JSON.parse(localStorage.getItem("booksList") || "[]");
//   }

//   // changeTitleValue(event: Event) {
//   //   const target = event.target as HTMLInputElement;
//   //   this.newBook.title = target.value;
//   //   console.log(this.newBook);
//   // }

//   submitForm() {
//     console.log(this.newBook);
//     this.booksList.push(this.newBook);
//     localStorage.setItem("booksList", JSON.stringify(this.booksList));
//   }
// }