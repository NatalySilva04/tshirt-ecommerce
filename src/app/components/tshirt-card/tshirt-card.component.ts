import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ITshirt } from '../../interfaces/tshirt.interface';
import { TshirtCartService } from '../../services/tshirt-cart.service';
import { TshirtCartApiService } from '../../services/tshirt-cart-api.service';
//import { HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-tshirt-card',
  standalone: true,
  imports: [ NgIf, MatCardModule, MatButtonModule, RouterModule ],
  templateUrl: './tshirt-card.component.html',
  styleUrl: './tshirt-card.component.css'
})
export class TshirtCardComponent implements OnInit {
  //@Input() tshirt?: ITshirt;
  //@Input() teste?: string;
  //@Output() addTshirtToCart: EventEmitter<void> = new EventEmitter();

  @Input() tshirt?: ITshirt;
  loggedUser?: IUser | null = null;
  addedTshirtList: ITshirt[] = [];

  constructor( 
    private tshirtCartService: TshirtCartService,
    private authService: AuthService,
    private tshirtCartApiService: TshirtCartApiService,
    private dialog: MatDialog
  ) {
    this.authService.loggedUser$.subscribe((user: IUser | null) => {
      this.loggedUser = user;
    });
  } 

  ngOnInit() {
    this.addedTshirtList = this.tshirtCartService.getAllTshirt();
  }

  addToShoppingCart() {
    this.tshirtCartApiService.addOrUpdateTshirtFromCart(this.tshirt); 
  
     // this.addTshirtToCart.emit();

    // console.log(this.tshirt);
    // this.tshirtCartSevice.findOrAddTshirt(this.tshirt);
    // console.log("Tshirt adicionada com sucesso!");
  }

  removeFromCatalog() {
    this.dialog.open(DeleteDialogComponent, {
      data: { tshirtId: this.tshirt?._id }
    });
  }

  getUpdateLink() {
    return `/tshirt/update/${this.tshirt?._id}`;	
  }
}
