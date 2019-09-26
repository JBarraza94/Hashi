import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactoService } from '../../services/contacto/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  form:FormGroup;

  messageData: Object = {
    name:'',
    email:'',
    message:''
  };

  constructor(public _contactoService: ContactoService) { 

    this.form = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'message': new FormControl('', Validators.required)

    });

  }

  ngOnInit() {

  }

  sendMessage(value:any){

    if(this.form.invalid){

        return;

    }

    this._contactoService.sendMessage(value);

    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Tu mensaje ah sido enviado',
      showConfirmButton: false,
      timer: 2000
    })

    this.reset();

  }

  get email(){

    return this.form.get('email');

  }

  get name(){

    return this.form.get('name');

  }

  get message(){

    return this.form.get('message');

  }

  reset(){

    this.form.reset(this.messageData);

  }

}
