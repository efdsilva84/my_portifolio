import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormControl } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dadosMessage!: FormGroup
  dataAtual: Date = new Date();

  constructor( private fb: FormBuilder){
    this.dadosMessage = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      assunto: ['', Validators.required],
      mensagem: ['', Validators.required],
    });
  }

  ngOnInit() {

  }



  onSubmit(){
    console.log("formulario", this.dadosMessage.value);
  }


  
  


}
