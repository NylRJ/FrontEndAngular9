import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserDTO } from 'src/app/core/model/userDTO';
import { error } from 'protractor';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user = new UserDTO();
  idUser:string;
  constructor(private apiServe: ApiService,
              private route:ActivatedRoute,
              private location:Location) { }

  ngOnInit() {
    this.idUser = this.route.snapshot.paramMap.get('id');
    this.apiServe.getUserById(this.idUser).subscribe(user =>{
      console.log('Usuario encontrado com sucesso!');
    }, error =>{
      console.log('Erro ao atualizar usuário!',error);
    });
  }

  update():void{
    this.user.id = this.idUser;
    this.apiServe.updateUser(this.user).subscribe(() =>{
      this.goBack();
    }, error =>{
      console.log('Erro ao Atualizar!',error);
    });
  }
  
  goBack(){
    this.location.back();
  }

}
