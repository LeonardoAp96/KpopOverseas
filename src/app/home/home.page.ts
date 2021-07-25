import { StorageService } from './../Service/storage.service';
import { Component } from '@angular/core';

interface CardsRadar{
  imagem: String;
  url: String;
  NomeMusica: String;
  NomeArtista: String[];
  Descricao: String;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public listCardsRadar : CardsRadar[];

  constructor(private storage: StorageService) {
    this.listCardsRadar = storage.listCardsRadar;
  }

  public getContent() {
    return document.querySelector('ion-content');
  }

  public scrollToBottom() {
    this.getContent().scrollToBottom(500);
  }

  public scrollToTop() {
    this.getContent().scrollToTop(500);
  }

}
