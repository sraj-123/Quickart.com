import { Component, OnInit } from '@angular/core';
import {ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users : any;

  getUsers() : any 
  {
    this.apiService.getRecords().subscribe(
      data => {this.users = data;},
      error => {console.log(error);},
      () => { console.log("Sucess")}
    );
  }

}
