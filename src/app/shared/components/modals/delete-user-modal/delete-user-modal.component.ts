import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent implements OnInit {
  @ViewChild('deleteUserModal') public deleteUserModal;
  @Input() recebeItem;
  @Output() resposta = new EventEmitter
  recebeTitulo = 'Curso de Spring Boot com Angular 9';
  recebePergunta = 'Deseja realmente deletar esse Usuário?';
  constructor() { }

  ngOnInit() {
  }

  onClose(event: any) {
    console.log(event);
  }

  show() {
    this.deleteUserModal.show();
  }

  delete() {
    this.resposta.emit(this.recebeItem);
    this.deleteUserModal.hide();

  }


}
