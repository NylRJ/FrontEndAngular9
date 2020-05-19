import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-register-user',
  template: `<div class="view overlay zoom"> 
                <p class="white-text">Verificando Solicitação de registro de Usuário</p>
            </div>`,

})
export class RegisterUserComponent implements OnInit {
  public token:string;
  constructor(private apiServe: ApiService,
              private location: Location,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get("token");
    this.apiServe.confirmationRegisterToken(this.token).subscribe(register =>{
      console.log('Registro confirmado com sucesso!');
      this.router.navigate(['login']);
    },error=>{
      console.log('Error Registro não confirmado!', error);
      this.router.navigate(['resend-register-token']);

    });
  }


  goback() {
    this.location.back();
  }

}
