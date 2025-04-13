import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'

  })
};

@Injectable({
  providedIn: 'root'
})
export class PortifolioService {

  constructor(private api: ApiService) { }

  sendMessage() {
    return this.api.post('eburger/eburger_txt', false, httpOptions);
  }
}
