import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { UserDTO } from 'src/app/core/model/userDTO';
import { error } from 'protractor';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: UserDTO[];
  constructor(private router:Router,private apiServe:ApiService) { }

  ngOnInit() {
    if(!this.apiServe.isAuthenticated()){
      this.router.navigate(['login']);
    }
    this.apiServe.getUsers().subscribe(users =>{
      this.users = users;
    }, error=>{
      console.log('Erro ao listar Usuários!');
    });
  }

  getRoles(user:UserDTO){
    return this.apiServe.getRoles(user.roles);
  }

}
