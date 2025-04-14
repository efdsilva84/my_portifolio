import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
        Authorization: 'Admin 123456'


  })
};

@Injectable({
  providedIn: 'root'
})
export class PortifolioService {

  constructor(private api: ApiService) { }

  sendMessage(data:any) {
    return this.api.post('portifolio/msg_portifolio', data, httpOptions);
  }
}
