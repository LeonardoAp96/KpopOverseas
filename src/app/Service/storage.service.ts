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
  d1?:{musicas?:CardsRadar[], data?: any},
  d2?:{musicas?:CardsRadar[], data?: any},
  d3?:{musicas?:CardsRadar[], data?: any},
  d4?:{musicas?:CardsRadar[], data?: any},
  d5?:{musicas?:CardsRadar[], data?: any},
  d6?:{musicas?:CardsRadar[], data?: any},
  d7?:{musicas?:CardsRadar[], data?: any}
}
export interface MonthRadar{
  week1?:WeekRadar,
  week2?:WeekRadar,
  week3?:WeekRadar,
  week4?:WeekRadar,
  week5?:WeekRadar
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  public listCardsRadar : CardsRadar[];
  public kpopoverseasAugust : MonthRadar;

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
