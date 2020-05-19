import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService,
     private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.clearLocalStore();
    this.apiService.logout().subscribe(() => {
      this.router.navigate(['login']);
    }, error => {
      console.log('Erro ao efetuar o logout!', error);
    });
  }
  clearLocalStore() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('currentUser');
  }

  isAutenticated(): Observable<boolean> {
    return this.apiService.isAuthenticated();
  }


}
