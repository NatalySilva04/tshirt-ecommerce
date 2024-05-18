import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ITshirt } from '../../interfaces/tshirt.interface';
import { TshirtCatalogService } from '../../services/tshirt-catalog.service';

@Component({
  selector: 'app-tshirt-create',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatButtonModule, 
    ReactiveFormsModule 
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './tshirt-create.component.html',
  styleUrl: './tshirt-create.component.css'
})
export class TshirtCreateComponent {
  private tshirtId: string;
  tshirtToUpdate?: ITshirt;
  tshirtList: ITshirt[] = [];
  tshirtForm: FormGroup;
  
  constructor( 
    private tshirtCatalogService: TshirtCatalogService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.tshirtId = this.route.snapshot.params["id"];
     
    this.tshirtToUpdate = this.tshirtCatalogService.getTshirtById(this.tshirtId);
    console.log(this.tshirtToUpdate);

    this.tshirtForm = new FormGroup({
      
      nome: new FormControl(this.tshirtToUpdate?.nome),
      preco: new FormControl(this.tshirtToUpdate?.preco),
      descricao: new FormControl(this.tshirtToUpdate?.descricao),
      cor: new FormControl(this.tshirtToUpdate?.cor),
      tamanho: new FormControl(this.tshirtToUpdate?.tamanho),
      totalInStock: new FormControl(this.tshirtToUpdate?.totalInStock)      
});

}

submitForm() {
  let tshirtData: ITshirt = this.tshirtForm.value;

  if (this.tshirtId) {
    tshirtData = {...tshirtData, _id: this.tshirtId};
    this.tshirtCatalogService.updateTshirt(tshirtData);

    this.router.navigate(['/']);
    return;
  }

  this.router.navigate(['/']);
  this.tshirtCatalogService.createTshirt(tshirtData);
}
}