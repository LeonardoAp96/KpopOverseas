import { StorageService } from './../Service/storage.service';
import { Component } from '@angular/core';
interface CardsRadar{
  imagem: String;
  url: String;
  NomeMusica: String;
  NomeArtista: String[];
  Descricao: String;
}interface StudentData {
  Name: string;
  Age: number;
  Address: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // constructor(private storage: StorageService,
  //   private firebaseService: FirebaseService,
  //   public fb: FormBuilder
  // ) {
  //   this.listCardsRadar = storage.listCardsRadar;
  //   this.studentData = {} as StudentData;
  // }

  public listCardsRadar : CardsRadar[];
  constructor(){
    this.PopularWeek();
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

  public PopularWeek(){
        this.listCardsRadar = [
          {
            imagem: "assets/icon/logo.png",
            url: "https://youtu.be/ffwAKz_J5uE",
            NomeArtista: ["Jisoo(lovelyz)"],
            NomeMusica: "Pet",
            Descricao: "Boazin"
          },
          {
            imagem: "assets/image/gwsn.jpg",
            url: "https://youtu.be/ffwAKz_J5uE",
            NomeArtista: ["Jisoo(lovelyz)"],
            NomeMusica: "Pet",
            Descricao: "Boazin"
          },
          {
            imagem: "assets/image/yukika.png",
            url: "https://youtu.be/ffwAKz_J5uE",
            NomeArtista: ["Jisoo(lovelyz)"],
            NomeMusica: "Pet",
            Descricao: "Boazin"
          },
          {
            imagem: "assets/icon/logo.png",
            url: "https://youtu.be/ffwAKz_J5uE",
            NomeArtista: ["Jisoo(lovelyz)"],
            NomeMusica: "Pet",
            Descricao: "Boazin"
          },
          {
            imagem: "assets/icon/logo.png",
            url: "https://youtu.be/ffwAKz_J5uE",
            NomeArtista: ["Jisoo(lovelyz)"],
            NomeMusica: "Pet",
            Descricao: "Boazin"
          },
          {
            imagem: "assets/icon/logo.png",
            url: "https://youtu.be/ffwAKz_J5uE",
            NomeArtista: ["Jisoo(lovelyz)"],
            NomeMusica: "Pet",
            Descricao: "Boazin"
          }
        ]
      }
    

}
