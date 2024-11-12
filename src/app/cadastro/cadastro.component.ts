import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  onSubmit(form: any) {
    console.log('Dados do formulário:', form.value);
  }

}
