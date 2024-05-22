import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { ITshirt } from '../../interfaces/tshirt.interface';
import { TshirtCartService } from '../../services/tshirt-cart.service';
import { TshirtCartApiService } from '../../services/tshirt-cart-api.service';

@Component({
  selector: 'app-tshirt-cart',
  standalone: true,
  imports: [ MatDividerModule, MatListModule, MatButtonModule ],
  templateUrl: './tshirt-cart.component.html',
  styleUrl: './tshirt-cart.component.css'
})
export class TshirtCartComponent implements OnInit {
  // @Input("tshirtList") addedTshirtList: ITshirt[] = [];
  addedTshirtList: ITshirt[] = [];

  constructor(
    private tshirtCartService: TshirtCartService,
    private tshirtCartApiService: TshirtCartApiService
  ) { 

  }

  ngOnInit() {
    // console.log(this.addedTshirtList);
    const $addedTshirtList = this.tshirtCartApiService.tshirtList$;
    $addedTshirtList.subscribe((addedTshirtList) => {
      this.addedTshirtList = addedTshirtList;
    }); 
    
    // this.addedTshirtList = this.tshirtCartApiService.getAllTshirt();
    // this.addedTshirtList = this.tshirtCartSevice.getAllTshirt();
  }

  //ngOnChanges(changes: SimpleChanges): void {
  //  const $addedTshirtList = ;      
  //  localStorage.setItem("addedTshirtList", JSON.stringify(this.addedTshirtList)); 
  //}

  incrementTotalTshirtCopies(tshirt: ITshirt) {
    this.tshirtCartApiService.incrementTotalTshirtCopies(tshirt._id);
    // this.tshirtCartSevice.incrementTotalTshirtCopies(tshirt._id);
    // this.addedTshirtList = this.tshirtCartSevice.getAllTshirt();
  }

  decrementTotalTshirtCopies(tshirt: ITshirt) {
    this.tshirtCartApiService.decrementTotalTshirtCopies(tshirt._id);
    // this.tshirtCartSevice.decrementTotalTshirtCopies(tshirt._id);
    // this.addedTshirtList = this.tshirtCartSevice.getAllTshirt();
  }
}
