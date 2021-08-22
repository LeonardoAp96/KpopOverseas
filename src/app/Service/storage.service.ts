import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface CardsRadar{
  imagem?: String,
  url?: String,
  NomeMusica?: String,
  NomeArtista?: String[],
  Descricao?: String
}
export interface WeekRadar{
  musicas?:CardsRadar[], 
  data?: String
}
export interface MonthRadar{
  week1?:WeekRadar[],
  week2?:WeekRadar[],
  week3?:WeekRadar[],
  week4?:WeekRadar[],
  week5?:WeekRadar[]
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  public listCardsRadar : CardsRadar[];

  constructor(private storage: Storage){
  }

  public PopularWeek(){

    this.listCardsRadar = 
    [
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
    return this.listCardsRadar;
  }

}
