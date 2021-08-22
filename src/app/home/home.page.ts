import { StorageService, CardsRadar, MonthRadar, WeekRadar } from './../Service/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public Weeks: number;

  public kpopoverseas : MonthRadar[] = [];
  
  public listCardsRadar : WeekRadar[];
  constructor(private storage: StorageService){
    
    this.PreencherMonths(12);
    this.createMonthAugust();
    
    this.listCardsRadar = this.kpopoverseas[8].week2;
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

  public PreencherMonths(count : number){
    if(count > 0){
      
    this.kpopoverseas.push({week1:[],
      week2:[],
      week3:[],
      week4:[],
      week5:[]});
      count--;
      this.PreencherMonths(count);
    }
  }

  public createMonthAugust(){
    this.createAugustWeek1();
    this.createAugustWeek2();
    this.createAugustWeek3();
    this.createAugustWeek4();
    this.createAugustWeek5();
  }
  
  public createAugustWeek1(){
    var week = this.kpopoverseas[8].week1;

    week.push({musicas: [
      {url: "https://youtu.be/NjRSajtkaWs", NomeArtista: ["Rocoberry"],NomeMusica: "What is love?", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/Ug2fBzYmewU", NomeArtista: ["YoonDo"],NomeMusica: "Don’t say goodbye", imagem: "assets/icon/logo.png"}
    ],
    data : "01/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/tg2uF3R_Ozo", NomeArtista: ["Somi"],NomeMusica: "Dumb Dumb", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/h-anX1_bYmA", NomeArtista: ["Lim Kim"],NomeMusica: "Falling", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/MFv-EzMqUcg", NomeArtista: ["Rio"],NomeMusica: "Heavy Heart", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/32kd8oFHoAw", NomeArtista: ["Astro"],NomeMusica: "After Midnight", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/hYVWJWrSDmY", NomeArtista: ["Golden Child"],NomeMusica: "Ra Pam Pam", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/wbZygpRwFZk", NomeArtista: ["Stable"],NomeMusica: "Bubble Bath", imagem: "assets/icon/logo.png"},
    ],
    data : "02/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/B7KVmoGWgw8", NomeArtista: ["Punch", "Madclown"],NomeMusica: "I Miss You", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/DHquEkNdYvs", NomeArtista: ["02 Tank", "HeyGirls"],NomeMusica: "Shining Star", imagem: "assets/icon/logo.png", Descricao:"Carismaticas"},
      {url: "https://youtu.be/9fcdjw1dSZs", NomeArtista: ["Prudence "],NomeMusica: "Blue Is Your Name", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/V7aO2MXm9zo", NomeArtista: ["Iro"],NomeMusica: "blahblah", imagem: "assets/icon/logo.png"},
      
      //{url: "https://youtu.be/Fy1pGA04hDc", NomeArtista: ["Onesun", "Diamond tree", "MCRMean", "DJ Amy"],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/jKpdTofE2E4", NomeArtista: ["Dohu"],NomeMusica: "overthinking us", imagem: "assets/icon/logo.png"},
      //{url: "https://youtu.be/jITovGWtccE", NomeArtista: ["maktub"],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/KpLvCNo79DA", NomeArtista: ["Onew"],NomeMusica: "Dear my spring", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/SzP6xOIp2U4", NomeArtista: ["Kind Blue", "HwaSa"],NomeMusica: "I can’t make you love me", imagem: "assets/icon/logo.png"},
    ],data : "03/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/DZEOt4pQXXk", NomeArtista: ["Weeekly"],NomeMusica: "Holiday Party", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/loRdC8vn03w", NomeArtista: ["Ben"],NomeMusica: "Love Recipe", imagem: "assets/icon/logo.png", Descricao:"Boazin"},
      {url: "https://youtu.be/fOdML_XhHvQ", NomeArtista: ["Heize"],NomeMusica: "On Rainy Day", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/i3ySAgEMn3w", NomeArtista: ["Skyle"],NomeMusica: "Fly Up High", imagem: "assets/icon/logo.png"},
      
      {url: "https://youtu.be/TiJGJ1Vwe04", NomeArtista: ["The Stray"],NomeMusica: "I just wanted to ask", imagem: "assets/icon/logo.png"},
      //{url: "https://youtu.be/MxZxWFRg9Hs", NomeArtista: ["4MEN"],NomeMusica: "", imagem: "assets/icon/logo.png"},
      //{url: "https://youtu.be/YlIsl6aROkw", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
    ],data : "04/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/3ZGboRRfcp8", NomeArtista: ["JinE"],NomeMusica: "It Because raining", imagem: "assets/icon/logo.png", Descricao:"Gostei"},
      {url: "https://youtu.be/seP2uL2uiBw", NomeArtista: ["ChoMyo "],NomeMusica: "Mint Choco Shake", imagem: "assets/icon/logo.png"},
    ],data : "05/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/V0wInr_xATk", NomeArtista: ["Sunmi"],NomeMusica: "You can't sit with us", imagem: "assets/icon/logo.png"},
      //{url: "https://youtu.be/PKVheZxZvcQ", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/jpcz5zvZOUM", NomeArtista: ["Im SeJun"],NomeMusica: "Lie", imagem: "assets/icon/logo.png"},
    ],data : "06/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/DFL7FXEMbbk", NomeArtista: ["D.no "],NomeMusica: "Daisy", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/LCGsiA24r94", NomeArtista: ["ecru"],NomeMusica: "Wave", imagem: "assets/icon/logo.png"},
    ],data : "07/08"}
    );

    
    this.kpopoverseas[8].week1 = week;
  }

  public createAugustWeek2(){
    var week = this.kpopoverseas[8].week2;

    week.push({musicas: [
      {url: "https://youtu.be/Is4Xv3vQSXU", NomeArtista: ["Kris Kim"],NomeMusica: "Faith Is A Lie", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/VbBMBkLwZoI", NomeArtista: ["Nyou"],NomeMusica: "Memory", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/X3PFu82F_S8", NomeArtista: ["10CM"],NomeMusica: "Go Back", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/MwHjBdfK5bw", NomeArtista: ["Jang Min Ho"],NomeMusica: "That's Life", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/3QWBd_Y4aS4", NomeArtista: ["BB"],NomeMusica: "Summer night", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/sNfycAu31kk", NomeArtista: ["Yammo", "h3hyeon", "Uno"],NomeMusica: "Surf", imagem: "assets/icon/logo.png"}
    ],data : "08/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/rthppvDJ2fA", NomeArtista: ["Hyo", "Bibi"],NomeMusica: "Second ", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/QRlCPJ1-pCo", NomeArtista: ["ONF"],NomeMusica: "Popping", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/mwCeeVU_2Jo", NomeArtista: ["The Boyz"],NomeMusica: "THRILL RIDE", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/xijLWnfirZ8", NomeArtista: ["Kim Woojin"],NomeMusica: "Ready Now", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/PDTWb_FOPBw", NomeArtista: ["bbaek ga"],NomeMusica: "You&I", imagem: "assets/icon/logo.png"},
    ],data : "09/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/nBxnh010LU8", NomeArtista: ["Hyolyn", "Dasom"],NomeMusica: "Summer or Summer", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/GvB-xIxkIvY", NomeArtista: ["Youra"],NomeMusica: "Cherry On Top", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/QypKfg_aOhQ", NomeArtista: ["OmyuO","REDA"],NomeMusica: "Recover", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/eJeVyR8VwSg", NomeArtista: ["Woo Yerin"],NomeMusica: "Flame", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/IAfDZKvqvJM", NomeArtista: ["Triple Seven (777)"],NomeMusica: "Presente", imagem: "assets/icon/logo.png"},

      {url: "https://youtu.be/dOZyZiJ9n_8", NomeArtista: ["Ten"],NomeMusica: "Paint Me Naked", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/3XOUJlXlx-E", NomeArtista: ["Gray", "Tugi"],NomeMusica: "I Don't Love You", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/lsZj1fMvH84", NomeArtista: ["Knave", "Ayushy"],NomeMusica: "Slowly ", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/gKXq937ZP2o", NomeArtista: ["BDC"],NomeMusica: "Moon Walker", imagem: "assets/icon/logo.png"},
    ],data : "10/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/gkkkGM3BMRY", NomeArtista: ["Hi-L"],NomeMusica: "Too Too", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/HRtoWqkF054", NomeArtista: ["Son MinSu","Lee EunJi", "Ravi"],NomeMusica: "ParaPara Queen", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/wN_2eIXqVK4", NomeArtista: ["V.O.S"],NomeMusica: "Always be here", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/2TG-ESIboPY", NomeArtista: ["Aliven"],NomeMusica: "Time Slip", imagem: "assets/icon/logo.png"},

      {url: "https://youtu.be/h9HBaEx-70A", NomeArtista: ["AF"],NomeMusica: "Where is the Future?", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/GZ3xpkF1C8o", NomeArtista: ["AB6IX"],NomeMusica: "Walking In The Rain", imagem: "assets/icon/logo.png"},
      //{url: "https://youtu.be/sWt64a7J68Y", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
    ],data : "11/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/eja7ahFFktA", NomeArtista: ["MAKAMAKA"],NomeMusica: "Hey U", imagem: "assets/icon/logo.png"},

      {url: "https://youtu.be/ntrZbG4dgWU", NomeArtista: ["Park Jihoon"],NomeMusica: "Gallery", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/-ffD9Desjcg", NomeArtista: ["NCT U", "Doyoung", "Haechan"],NomeMusica: "Maniac", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/Mpf6A2XFBqY", NomeArtista: ["Gaho"],NomeMusica: "Ride", imagem: "assets/icon/logo.png"},
    ],data : "12/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/XK_UwAQE7A4", NomeArtista: ["yourbeagle","Juncoco","BLIN", "LOD"],NomeMusica: "More", imagem: "assets/icon/logo.png"},
      //{url: "https://youtu.be/fx3TqrnNhEM", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/ii8z-KsBGJA", NomeArtista: ["Lim JeongHee"],NomeMusica: "Let's go swimming", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/-fhe2KIQgaU", NomeArtista: ["Kwon Jin Ah"],NomeMusica: "Run to You", imagem: "assets/icon/logo.png"},

      {url: "https://youtu.be/dDRotg4ysMU", NomeArtista: ["Sung Youngjoo"],NomeMusica: "Summer date", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/KosFBCYLVi8", NomeArtista: ["Han Seung Yoon"],NomeMusica: "Winners", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/Hi464NLL7gM", NomeArtista: ["Bae Giseong"],NomeMusica: "Magnet", imagem: "assets/icon/logo.png"},
      //{url: "https://youtu.be/o-ML207l_Rg", NomeArtista: ["Park Won"],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/ZNwo9WNeN0Y", NomeArtista: ["Gray"],NomeMusica: "Party For The Night", imagem: "assets/icon/logo.png"},
    ],data : "13/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/RwVAutDIU5Q", NomeArtista: ["Wavycake","Clavita","Donutman"],NomeMusica: "Cloud ", imagem: "assets/icon/logo.png"},
      
      {url: "https://youtu.be/2kMG4LVqYUM", NomeArtista: ["N.CUS"],NomeMusica: "Get Out", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/iKZLtefM6mk", NomeArtista: ["Lee Donghwi"],NomeMusica: "Keep your head up", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/DjvjTMTm3U8", NomeArtista: ["Utopi"],NomeMusica: "Sunset ", imagem: "assets/icon/logo.png"},
    ],data : "14/08"}
    );

    this.kpopoverseas[8].week2 = week;
  }

  public createAugustWeek3(){
    var week = this.kpopoverseas[8].week3;

    week.push({musicas: [
      {url: "https://youtu.be/vfKBW23_C2s", NomeArtista: ["SLAY","AVIN"],NomeMusica: "Love, This", imagem: "assets/icon/logo.png"},
      //{url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"}
    ],data : "15/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/c9RzZpV460k", NomeArtista: ["RedVelvet"],NomeMusica: "Queendom", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/4YsHXMAsfmw", NomeArtista: ["Sole"],NomeMusica: "Stay with me", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/X6czSbumNGI", NomeArtista: ["WOO TAE WOON","IONE","YOON BOMI(Apink)"],NomeMusica: "Vaccine", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/RX6EHHKnHfA", NomeArtista: ["SOOIN", "Seo JoonGyo"],NomeMusica: "The way we came together", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/LdP7Ep_FzBM", NomeArtista: ["HONDAM"],NomeMusica: "BAEKCHIMI", imagem: "assets/icon/logo.png"},
      
      {url: "https://youtu.be/Q2TCbPnpqkA", NomeArtista: ["F.able"],NomeMusica: "Run Run Run", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/sZvhp3IEM84", NomeArtista: ["BZ-BOYS"],NomeMusica: "Close your eyes", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/kd6_7utjEi0", NomeArtista: ["Siyoon"],NomeMusica: "Dance With Me", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/2fTl0IGd1AA", NomeArtista: ["KIM JONG KOOK","ATEEZ"],NomeMusica: "Be My Lover", imagem: "assets/icon/logo.png"},
    ],data : "16/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/khGjK2Ml80Y", NomeArtista: ["CIX"],NomeMusica: "Wave", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/JzODRUBBXpc", NomeArtista: ["TXT"],NomeMusica: "LO$ER=LO♡ER", imagem: "assets/icon/logo.png"},

      {url: "https://youtu.be/GYB6jfC9A6U", NomeArtista: ["(WayV) TEN&YANGYANG"],NomeMusica: "Low Low", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/Hrr2WvSTYro", NomeArtista: ["N.Flying"],NomeMusica: "Chance", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/VvZvcLDgN2s", NomeArtista: ["Gray", "Zion.T"],NomeMusica: "Make Love", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/JBL6yd9cPD8", NomeArtista: ["Brick"],NomeMusica: "Stay Home", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/xXxCtZJ-Mh0", NomeArtista: ["O3ohn"],NomeMusica: "Even days", imagem: "assets/icon/logo.png"},
    ],data : "17/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/xsjjq4UV-E0", NomeArtista: ["PoshGirls"],NomeMusica: "Got Chu", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/_AO0_-bdn0A", NomeArtista: ["Dopein"],NomeMusica: "Rare", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/NKxFynIY00o", NomeArtista: ["Lee Boram", "Seeya"],NomeMusica: "Because I Love You", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/Ri7Y9NZPZ8g", NomeArtista: ["Davichi"],NomeMusica: "Looking at the Photo", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/P9mmDNYKRcs", NomeArtista: ["Kyung seon", "In The City", "Lillo"],NomeMusica: "love is like glass", imagem: "assets/icon/logo.png"},
      
      
      {url: "https://youtu.be/lhh5FzzQY38", NomeArtista: ["Pentagon"],NomeMusica: "Cerberus ", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/JMWy7mz1fcE", NomeArtista: ["choong hyunCho"],NomeMusica: "Chatting prohibited", imagem: "assets/icon/logo.png"}
    ],data : "18/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/JkAr1pm0pF0", NomeArtista: ["Hwang Woo Lim", "Kang Hyeyeon","Maria Leise"],NomeMusica: "Why Do You Call Me", imagem: "assets/icon/logo.png"},
      
      {url: "https://youtu.be/zIHi5WKGPww", NomeArtista: ["LUMINOUS"],NomeMusica: "Dreaming", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/bSqYzC3_Zb4", NomeArtista: ["Neulbo","Samuel Seo","BLNK"],NomeMusica: "Save me", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/Nrypvg3OfYY", NomeArtista: ["CRAVITY"],NomeMusica: "Gas Pedal", imagem: "assets/icon/logo.png"},
    ],data : "19/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/2z0d4D93p5k", NomeArtista: ["GongSang"],NomeMusica: "Colors", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/pPxgpWVXweg", NomeArtista: ["Seung Hee(OH MY GIRL)"],NomeMusica: "Dear My Nights", imagem: "assets/icon/logo.png"},
      
      {url: "https://youtu.be/KbUrG8E2egM", NomeArtista: ["HANHAE", "Nucksal","Layone"],NomeMusica: "Lay Back", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/JCf5nUSIALs", NomeArtista: ["Euntak Lee"],NomeMusica: "The Absolute Way", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/ei231LkrlJc", NomeArtista: ["LUCY "],NomeMusica: "Irrelevant Answer", imagem: "assets/icon/logo.png"}
    ],data : "20/08"}
    );

    week.push({musicas: [
      {url: "https://youtu.be/hh2BSitU8j4", NomeArtista: ["JENYER","Heo Gayoon"],NomeMusica: "Soop", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/XynbJWcqumE", NomeArtista: ["Aalia "],NomeMusica: "All I see is you", imagem: "assets/icon/logo.png"},
      //{url: "https://youtu.be/qaYlU1AUM24", NomeArtista: ["RIO"],NomeMusica: "", imagem: "assets/icon/logo.png"},

      {url: "https://youtu.be/3oJtaphAh5c", NomeArtista: ["V-Hawk"],NomeMusica: "Is It Raining?", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/I3FVZNbm31w", NomeArtista: ["DIOS"],NomeMusica: "Touch Me", imagem: "assets/icon/logo.png"},
    ],data : "21/08"}
    );
    
    this.kpopoverseas[8].week3 = week;
  }

  public createAugustWeek4(){
    var week = this.kpopoverseas[8].week4;

    week.push({musicas: [
      {url: "https://youtu.be/FLt582SB2ds", NomeArtista: ["Ants"],NomeMusica: "I know", imagem: "assets/icon/logo.png"},
      
      {url: "https://youtu.be/-H5y6wM2v-o", NomeArtista: ["Jade.L"],NomeMusica: "Every Life is Ruined", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/qSvPwTfpEOk", NomeArtista: ["Your Song"],NomeMusica: "Piano Man", imagem: "assets/icon/logo.png"},
      {url: "https://youtu.be/8SU4O8OMuHQ", NomeArtista: ["Gray","meenoi"],NomeMusica: "Eternal Sunshine", imagem: "assets/icon/logo.png"},
      
    ],data : "22/08"}
    );

    week.push({musicas: [
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
    ],data : "23/08"}
    );

    week.push({musicas: [
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
    ],data : "24/08"}
    );

    week.push({musicas: [
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
    ],data : "25/08"}
    );

    week.push({musicas: [
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
    ],data : "26/08"}
    );

    week.push({musicas: [
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
    ],data : "27/08"}
    );

    week.push({musicas: [
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
    ],data : "28/08"}
    );

    this.kpopoverseas[8].week4 = week;
  }

  public createAugustWeek5(){
    var week = this.kpopoverseas[8].week5;

    week.push({musicas: [
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"}
    ],data : "29/08"}
    );

    week.push({musicas: [
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
    ],data : "30/08"}
    );

    week.push({musicas: [
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      {url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
    ],data : "31/08"}
    );
   
    this.kpopoverseas[8].week5 = week;
  }
}
