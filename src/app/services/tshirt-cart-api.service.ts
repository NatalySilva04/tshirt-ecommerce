import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITshirt } from '../interfaces/tshirt.interface';
import { BehaviorSubject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TshirtCartApiService {
  private tshirtSubject = new BehaviorSubject<ITshirt[]>([]);
  tshirtList$ = this.tshirtSubject.asObservable();
  API_URL: string = "https://crudcrud.com/api/d05796a659bf464491a6790029e72284/cart";

  constructor(private http: HttpClient) {
    this.getAllTshirt();
  }

  getAllTshirt() {
    return this.http.get<ITshirt[]>(this.API_URL).subscribe((tshirt: ITshirt[]) => {
      this.tshirtSubject.next(tshirt);
    });
  }

  getTshirtById(tshirtId: string) {
    return this.http.get<ITshirt>(`${this.API_URL}/${tshirtId}`);
  }

  getTshirtByCatalogId(tshirtId: string) {
    return this.http.get<ITshirt[]>(`${this.API_URL}`).pipe(
      // filter((tshirt: ITshirt[]) => {
      //   console.log(tshirt);
      //   for (let tshirt of tshirt) {
      //     if (tshirt.catalog_id == tshirtId) return true;
      //   }
      //   return false;
      // }),
      map((tshirt: ITshirt[]) => {
        const foundTshirt = tshirt.find(tshirt => tshirt.catalog_id === tshirtId);
        return foundTshirt ?? undefined;
      })
    );
  }

  addOrUpdateTshirtFromCart(tshirt?: ITshirt) {
    console.log(tshirt);
    if (!tshirt) return;

    this.getTshirtByCatalogId(tshirt._id)
      .subscribe((foundTshirt?: ITshirt) => {
        console.log(foundTshirt);
        if (!foundTshirt) {
            tshirt.totalAddedToCart = 1;
          this.addTshirtToCart(tshirt).subscribe((tshirt: ITshirt) => {
            const tshirtList = this.tshirtSubject.getValue();
            tshirtList.push(tshirt);
            this.tshirtSubject.next(tshirtList);
          });
          return;
        }

        foundTshirt.totalAddedToCart = (foundTshirt.totalAddedToCart < foundTshirt.totalInStock)? foundTshirt.totalAddedToCart + 1 : foundTshirt.totalAddedToCart;
        this.updateTshirtOnCart(foundTshirt).subscribe(() => {
          const tshirtList = this.tshirtSubject.getValue();
          const index = tshirtList.findIndex((b) => b._id == foundTshirt._id);
          tshirtList[index] = foundTshirt;

          this.tshirtSubject.next(tshirtList); // atualiza o SUBJECT e avisa a geral que ta olhando pra ele
          console.log("Atualização do total de livros no carrinho feita com sucesso");
        });
      });
  }

  addTshirtToCart(tshirt: ITshirt) {
    const { _id: tshirtId, ...tshirtNoId } = tshirt;
    tshirtNoId.catalog_id = tshirtId;

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<ITshirt>(this.API_URL, tshirtNoId, { headers });
  }

  updateTshirtOnCart(tshirt: ITshirt) {
    const { _id: tshirtId, ...tshirtNoId } = tshirt;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(`${this.API_URL}/${tshirtId}`, tshirtNoId, { headers });
  }

  removeTshirtFromCart(tshirtId: string) {
    return this.http.delete(`${this.API_URL}/${tshirtId}`);
  }

  incrementTotalTshirtCopies(tshirtId: string) {
    this.getTshirtById(tshirtId)
      .subscribe({
        next: (tshirt: ITshirt) => {
          tshirt.totalAddedToCart++;
          if (tshirt.totalAddedToCart > tshirt.totalInStock) {
            tshirt.totalAddedToCart = tshirt.totalInStock;
          }

          this.updateTshirtOnCart(tshirt).subscribe(() => {
            const tshirtList = this.tshirtSubject.getValue();
            const index = tshirtList.findIndex((b) => b._id == tshirt._id);
            tshirtList[index] = tshirt;

            this.tshirtSubject.next(tshirtList); // atualiza o SUBJECT e avisa a geral que ta olhando pra ele
            console.log("Atualização do total de livros no carrinho feita com sucesso");
          });
        }
      });
  }

  decrementTotalTshirtCopies(tshirtId: string) {
    this.getTshirtById(tshirtId)
      .subscribe({
        next: (tshirt: ITshirt) => {
            tshirt.totalAddedToCart--;

          if(tshirt.totalAddedToCart <= 0) {
            this.removeTshirtFromCart(tshirtId).subscribe(() => {
              const tshirtList = this.tshirtSubject.getValue();
              const index = tshirtList.findIndex((b) => b._id == tshirt._id);
              tshirtList.splice(index, 1);

              this.tshirtSubject.next(tshirtList); // atualiza o SUBJECT e avisa a geral que ta olhando pra ele
              console.log("Remoção do item do carrinho feita com sucesso");
            });
          }

          this.updateTshirtOnCart(tshirt).subscribe(() => {
            const tshirtList = this.tshirtSubject.getValue();
            const index = tshirtList.findIndex((b) => b._id == tshirt._id);
            tshirtList[index] = tshirt;

            this.tshirtSubject.next(tshirtList); // atualiza o SUBJECT e avisa a geral que ta olhando pra ele
            console.log("Atualização do total de livros no carrinho feita com sucesso");
          });
        }
      });
  }
}