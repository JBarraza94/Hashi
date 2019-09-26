import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../../models/message.model';

@Injectable()
export class ContactoService {

  constructor(public http:HttpClient) { }

  sendMessage(message:Message){

    console.log(message);

  }

}
