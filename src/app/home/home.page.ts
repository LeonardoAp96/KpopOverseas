import { StorageService, CardsRadar, MonthRadar, WeekRadar } from './../Service/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public Weeks: number;

  public kpopoverseas : MonthRadar={week1:{d1:{}}};
  
  public listCardsRadar : CardsRadar[];
  constructor(private storage: StorageService){
    debugger
    this.createMonthAugust();
    
    this.listCardsRadar = this.kpopoverseas.week1.d1.musicas;
  }

  ionViewWillEnter(){
  }

  public SelectWeeks(week: number){
    console.log("Hi" + week);
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

  public createMonthAugust(){
    this.kpopoverseas.week1.d1.musicas = [
      {url: "https://youtu.be/ffwAKz_J5uE", NomeArtista: ["Jisoo(lovelyz)"],NomeMusica: "Pet"},
      {url: "https://youtu.be/ffwAKz_J5uE", NomeArtista: ["Jisoo(lovelyz)"],NomeMusica: "Pet"},
      {url: "https://youtu.be/ffwAKz_J5uE", NomeArtista: ["Jisoo(lovelyz)"],NomeMusica: "Pet"},
      {url: "https://youtu.be/ffwAKz_J5uE", NomeArtista: ["Jisoo(lovelyz)"],NomeMusica: "Pet"},
      {url: "https://youtu.be/ffwAKz_J5uE", NomeArtista: ["Jisoo(lovelyz)"],NomeMusica: "Pet"},
    ];
    this.kpopoverseas.week1.d1.data = x=>{return"01/08"};
  }
}
