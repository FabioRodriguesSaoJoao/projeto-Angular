import { Injectable } from '@angular/core';
import * as moment from 'moment'
import { Client } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  clients: Array<Client> = [
    {
      id: 1,
      name:'fabio',
      email:'fabio@gmail.com',
      password:'123456',
      inclusionDate: '2021-07-24',
      address: 'Jundiaí',
      formOfPayment:'Today',
    }
  ];

  constructor() { }

  getDefaultClient(): Client {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      id: this.generateNextId(),
      name: '',
      email: '',
      password: '',
      inclusionDate: dateToday,
      address:'',
      formOfPayment:'',
    }
  }
  generateNextId(): number {
    return this.clients[(this.clients.length - 1)].id + 1;
  }
  createClient(client: Client) {
    this.clients.push(client);
    return this.clients;
  }
  getclientByEmailAndPassword(email:string|undefined, password:string| undefined ){
    return this.clients.find((client) => client.email === email && client.password === password);
  }
}