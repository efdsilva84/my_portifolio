import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { PortifolioService } from '../services/portifolio.service';
import { ToastrService } from 'ngx-toastr';



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

  constructor( private fb: FormBuilder, private portifolio:PortifolioService, private toast: ToastrService){
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
      this.portifolio.sendMessage(this.dadosMessage.value).subscribe((data:any)=>{
        this.dadosMessage.reset();
        this.toast.success("inserido", "sucessso")
        console.log("portifolio", data);
      })
    
  }


  
  


}
