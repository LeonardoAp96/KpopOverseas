import { StorageService, CardsRadar, MonthRadar, WeekRadar, DayRadar } from './../Service/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.page.html',
  styleUrls: ['./radar.page.scss'],
})
export class RadarPage{
  
    public WeekSelected: number;
    public MonthSelected: number;
    public nameMonth: String;
    public kpopoverseas : MonthRadar[] = [];
    
    public listCardsRadar : WeekRadar;
  
    constructor(private storage: StorageService){
      
      this.PreencherMonths(12);
      this.WeekSelected = 4;
      this.MonthSelected = 8;
      this.createMonthAugust(true);
      this.createMonthSeptember();
      
      this.listCardsRadar = this.kpopoverseas[this.MonthSelected].weeks[this.WeekSelected -1 ];
      this.nameMonth = this.kpopoverseas[this.MonthSelected].nameMonth;
    }
  
    ionViewDidEnter(){
      this.createMonthAugust(false);
    }

    public ConvertImg(url: String){
      if(url == "")
        return "assets/icon/logo.png";

      const str = url.split('/');
      const t = "https://i.ytimg.com/vi/" + str[str.length-1] + "/hqdefault.jpg" 
      return t;      
    }

    public refreshList(){
      this.listCardsRadar = this.kpopoverseas[this.MonthSelected].weeks[this.WeekSelected-1];
      this.nameMonth = this.kpopoverseas[this.MonthSelected].nameMonth;
    }

    public weekDay(dat:String){

      let dia = dat.split('/');
      let e = new Date(2021, Number.parseInt(dia[1])-1, Number.parseInt(dia[0]));
      let diaSemana = "";

      switch(e.getDay()){
        case 0: {diaSemana="Domingo";break;}
        case 1: {diaSemana="Segunda";break;}
        case 2: {diaSemana="Terça";break;}
        case 3: {diaSemana="Quarta";break;}
        case 4: {diaSemana="Quinta";break;}
        case 5: {diaSemana="Sexta";break;}
        case 6: {diaSemana="Sábado";break;}
        default: {diaSemana="nn";break;}
      }

      return diaSemana;
    }
  
    public SelectWeeks(week: number){
      this.WeekSelected = week;
      this.refreshList();
    }

    public SelectMonth(month: number){
      this.MonthSelected = month;
      this.refreshList();
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
      for(let num = 0; num <= count; num++) {
        this.kpopoverseas.push({weeks:[], nameMonth:this.nameMonthByNumber(num)});
        this.kpopoverseas[num].weeks.push({dia:[], weekNumber:"1"});
        this.kpopoverseas[num].weeks[0].dia.push({musicas:[], data:""});
      }
    }
  
    public nameMonthByNumber(number: Number){
      let nome:String="";
      switch(number){
        case 0: {nome="Janeiro";break;}
        case 1: {nome="Fevereiro";break;}
        case 2: {nome="Março";break;}
        case 3: {nome="Abril";break;}
        case 4: {nome="Maio";break;}
        case 5: {nome="Junho";break;}
        case 6: {nome="Julho";break;}
        case 7: {nome="Agosto";break;}
        case 8: {nome="Setembro";break;}
        case 9: {nome="Outubro";break;}
        case 10: {nome="Novembro";break;}
        case 11: {nome="Dezembro";break;}
        default: {nome="Nothing";break;}
      }
      return nome;
    }
  
    public createMonthAugust(number: Boolean){
  
      let num : DayRadar[] = this.createAugustWeek1();
      this.kpopoverseas[7].weeks[0].dia = num;
  
      if(!number){
        num = this.createAugustWeek2();
        this.kpopoverseas[7].weeks.push({dia:num, weekNumber:"2"});
        
        num = this.createAugustWeek3();
        this.kpopoverseas[7].weeks.push({dia:num, weekNumber:"3"});
  
        num = this.createAugustWeek4();
        this.kpopoverseas[7].weeks.push({dia:num, weekNumber:"4"});
  
        num = this.createAugustWeek5();
        this.kpopoverseas[7].weeks.push({dia:num, weekNumber:"5"});
      }
    }
    public createAugustWeek1(){
      var week: DayRadar[] = [];
  
      week.push({musicas: [
        {url: "https://youtu.be/NjRSajtkaWs", NomeArtista: ["Rocoberry"],NomeMusica: "What is love?", imagem: ""},
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
        {url: "https://youtu.be/DZEOt4pQXXk", NomeArtista: ["Weeekly"],NomeMusica: "Holiday Party", imagem: "", urlreview: "https://www.instagram.com/p/CSK1O-Sp1vX" },
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
        {url: "https://youtu.be/V0wInr_xATk", NomeArtista: ["Sunmi"],NomeMusica: "You can't sit with us", imagem: "", urlreview:"https://www.instagram.com/p/CSSqMEYl_5e"},
        //{url: "https://youtu.be/PKVheZxZvcQ", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/jpcz5zvZOUM", NomeArtista: ["Im SeJun"],NomeMusica: "Lie", imagem: "assets/icon/logo.png"},
      ],data : "06/08"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/DFL7FXEMbbk", NomeArtista: ["D.no "],NomeMusica: "Daisy", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/LCGsiA24r94", NomeArtista: ["ecru"],NomeMusica: "Wave", imagem: "assets/icon/logo.png"},
      ],data : "07/08"}
      );
  
      return week;
    }
  
    public createAugustWeek2(){
      var week: DayRadar[] = [];
  
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
        {url: "https://youtu.be/nBxnh010LU8", NomeArtista: ["Hyolyn", "Dasom"],NomeMusica: "Summer or Summer", imagem: "", urlreview:"https://www.instagram.com/p/CSaf3vRMdDg"},
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
        {url: "https://youtu.be/gkkkGM3BMRY", NomeArtista: ["Hi-L"],NomeMusica: "Too Too", imagem: "", urlreview:"https://www.instagram.com/p/CSdBQAblVuV"},
        {url: "https://youtu.be/HRtoWqkF054", NomeArtista: ["Son MinSu","Lee EunJi", "Ravi"],NomeMusica: "ParaPara Queen", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/wN_2eIXqVK4", NomeArtista: ["V.O.S"],NomeMusica: "Always be here", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/2TG-ESIboPY", NomeArtista: ["Aliven"],NomeMusica: "Time Slip", imagem: "assets/icon/logo.png"},
  
        {url: "https://youtu.be/h9HBaEx-70A", NomeArtista: ["AF"],NomeMusica: "Where is the Future?", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/GZ3xpkF1C8o", NomeArtista: ["AB6IX"],NomeMusica: "Walking In The Rain", imagem: "assets/icon/logo.png"},
        //{url: "https://youtu.be/sWt64a7J68Y", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
      ],data : "11/08"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/eja7ahFFktA", NomeArtista: ["MAKAMAKA"],NomeMusica: "Hey U", imagem: "", urlreview:"https://www.instagram.com/p/CSffyrgFnD0"},
  
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
  
      return week;
    }
  
    public createAugustWeek3(){
      var week: DayRadar[] = [];
  
      week.push({musicas: [
        {url: "https://youtu.be/vfKBW23_C2s", NomeArtista: ["SLAY","AVIN"],NomeMusica: "Love, This", imagem: "assets/icon/logo.png"},
        //{url: "", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"}
      ],data : "15/08"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/c9RzZpV460k", NomeArtista: ["RedVelvet"],NomeMusica: "Queendom", imagem: "", urlreview:"https://www.instagram.com/p/CSp2fFYF9Bk"},
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
        {url: "https://youtu.be/xsjjq4UV-E0", NomeArtista: ["PoshGirls"],NomeMusica: "Got Chu", imagem: "", urlreview:"https://www.instagram.com/p/CTA7g5Mp9yd"},
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
      
      return week;
    }
  
    public createAugustWeek4(){
      var week: DayRadar[] = [];
  
      week.push({musicas: [
        {url: "https://youtu.be/FLt582SB2ds", NomeArtista: ["Ants"],NomeMusica: "I know", imagem: "assets/icon/logo.png"},
        
        {url: "https://youtu.be/-H5y6wM2v-o", NomeArtista: ["Jade.L"],NomeMusica: "Every Life is Ruined", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/qSvPwTfpEOk", NomeArtista: ["Your Song"],NomeMusica: "Piano Man", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/8SU4O8OMuHQ", NomeArtista: ["Gray","meenoi"],NomeMusica: "Eternal Sunshine", imagem: "assets/icon/logo.png"},
        //{url: "https://youtu.be/DtTejicVcv0", NomeArtista: ["Ravi","부끄뚱 "],NomeMusica: "은근히 낯가려요", imagem: "assets/icon/logo.png"},
        
      ],data : "22/08"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/XDQ19PO69C4", NomeArtista: ["Kyung dasom"],NomeMusica: "My way", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/ZIZECe-55HY", NomeArtista: ["Brave Girls"],NomeMusica: "After We Ride", imagem: "", urlreview:"https://www.instagram.com/p/CS77Za0lAA9"},
        
        //{url: "https://youtu.be/EaswWiwMVs8", NomeArtista: ["Stray Kids"],NomeMusica: "소리꾼", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/K-0mbJGWA-k", NomeArtista: ["T1419"],NomeMusica: "Flex", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/0PIT0CAAhA4", NomeArtista: ["Verivery"],NomeMusica: "Trigger", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/U_hkUZuphyo", NomeArtista: ["Austn"],NomeMusica: "take me out", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/kaiPw5cVipw", NomeArtista: ["Tamiz"],NomeMusica: "Let's Look Away Like Stars", imagem: "assets/icon/logo.png"},
      ],data : "23/08"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/QMwJtMJLXE0", NomeArtista: ["CL"],NomeMusica: "Spicy", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/RRizK5QYZeo", NomeArtista: ["Kwon Eunbi"],NomeMusica: "Door", imagem: "", urlreview:"https://www.instagram.com/p/CS9uadJlvos"},
        {url: "https://youtu.be/sNJ6CzRce6Q", NomeArtista: ["Soo Yeony"],NomeMusica: "love u too much !", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/Lo7izYx_MZk", NomeArtista: ["Youha"],NomeMusica: "Ice T", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/Xrmw_mqKEno", NomeArtista: ["Monday (Weeekly)"],NomeMusica: "Like A Star", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/49TqM7q6KDs", NomeArtista: ["Yella.E"],NomeMusica: "Rider", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/9FFc6zewAp8", NomeArtista: ["ara"],NomeMusica: "Reason", imagem: "", urlreview:"https://www.instagram.com/p/CTAUygNFevQ"},
        
        {url: "https://youtu.be/IiAIiZmP7AM", NomeArtista: ["STI"],NomeMusica: "Wait For Rainbow", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/WvcKfr6X6Fs", NomeArtista: ["Colde"],NomeMusica: "It's You", imagem: "assets/icon/logo.png"},
        //{url: "https://youtu.be/-M__Nh-HvmA", NomeArtista: ["Loco"],NomeMusica: "이대로만", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/BkDzgVoal_k", NomeArtista: ["Wooks"],NomeMusica: "Summer Is Gone", imagem: "assets/icon/logo.png"},
      ],data : "24/08"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/JZmBo1EQnlE", NomeArtista: ["Everglow"],NomeMusica: "Promise", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/HQV4Nkuwqao", NomeArtista: ["Choi Cello"],NomeMusica: "Thirsty", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/YUuGTyAlO_M", NomeArtista: ["Jungtune", "Woojae"],NomeMusica: "Highball dreams", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/nIbVB95TQ2c", NomeArtista: ["Yegny", "Huckleberry P"],NomeMusica: "Better Rush", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/PWn0v1F3uoo", NomeArtista: ["Kang Boram"],NomeMusica: "Your Face", imagem: "assets/icon/logo.png"},
        
        {url: "https://youtu.be/jlgSN_LO0lA", NomeArtista: ["Mirae"],NomeMusica: "Splash", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/rIuM8mz6c-8", NomeArtista: ["Changjo"],NomeMusica: "Hurting U", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/hLiM_EkC98c", NomeArtista: ["D'tour"],NomeMusica: "Get Ready", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/6cGXYDT3eQE", NomeArtista: ["Lee Chan Won"],NomeMusica: "Convenience store", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/EuUWzoADf8g", NomeArtista: ["from all to human", "COFFEE BIG"],NomeMusica: "My Sweety", imagem: "assets/icon/logo.png"},
      ],data : "25/08"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/67iTTqOk6Dk", NomeArtista: ["Yongyong"],NomeMusica: "Rain Star", imagem: "assets/icon/logo.png"},
  
        {url: "https://youtu.be/SB2lvmWKE7A", NomeArtista: ["Car, the garden"],NomeMusica: "Closely Far Away", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/UoOWo8AFoh4", NomeArtista: ["Kwon Inha"],NomeMusica: "wherever I Go", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/4gdYpIuWw8c", NomeArtista: ["Dept"],NomeMusica: "perfect day", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/6WlFB05IYes", NomeArtista: ["Lee Mujin"],NomeMusica: "Scent of the day", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/L7QlZd11vP0", NomeArtista: ["CIELOGROOVE", "Ariaz", "Eson"],NomeMusica: "U", imagem: "assets/icon/logo.png"},
      ],data : "26/08"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/7j_XRt2YeG4", NomeArtista: ["Dain"],NomeMusica: "No filter", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/WKqBvatmOD4", NomeArtista: ["Nody Cika"],NomeMusica: "Birthday", imagem: "assets/icon/logo.png"},
        //{url: "https://youtu.be/idza42E5QcQ", NomeArtista: [""],NomeMusica: "", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/BBu2_qF20Nw", NomeArtista: ["BBA"],NomeMusica: "Hey Disco", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/WD6xBl8YhA8", NomeArtista: ["J.Season", "Sohee (ELRIS)"],NomeMusica: "Love X Lie", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/mIzEzWQTxzo", NomeArtista: ["Sujin", "Ryu Sera"],NomeMusica: "signs to break up", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/KTlG9ZDFlYI", NomeArtista: ["Jessica Jung"],NomeMusica: "Can't Sleep", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/6ON-GNlCy68", NomeArtista: ["Kriz"],NomeMusica: "Chaser", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/KmOVNVZEP9o", NomeArtista: ["LeeHi"],NomeMusica: "Only", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/V7FJw5U57cE", NomeArtista: ["Kim Sawol"],NomeMusica: "Someone Like You", imagem: "assets/icon/logo.png"},
      ],data : "27/08"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/0RN7jqCTHJs", NomeArtista: ["Wisue"],NomeMusica: "Dear my last summer", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/GHn6ATO9yBE", NomeArtista: ["Kim Yuna"],NomeMusica: "Coral", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/oOTi-2IqwZ8", NomeArtista: ["Ha Hyunsang"],NomeMusica: "Burning Sunset", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/6BcToUHCP48", NomeArtista: ["Due"],NomeMusica: "DrawBack", imagem: "assets/icon/logo.png"},
      ],data : "28/08"}
      );
  
      return week;
    }
  
    public createAugustWeek5(){
      var week: DayRadar[] = [];
  
      week.push({musicas: [
        {url: "https://youtu.be/d5w6oDMbQgQ", NomeArtista: ["Park EunByul"],NomeMusica: "Your night in me", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/vymFX6cUZPo", NomeArtista: ["Yourbeagle"],NomeMusica: "Baby", imagem: "assets/icon/logo.png"},
  
        {url: "https://youtu.be/Pd-lH9uRTQg", NomeArtista: ["Yen"],NomeMusica: "First Snowfall in September", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/K1Y9sRHWy5w", NomeArtista: ["Hwihyun"],NomeMusica: "I Miss You", imagem: "assets/icon/logo.png"}
      ],data : "29/08"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/sz2Dmo1_BjM", NomeArtista: ["Key", "Tayeon"],NomeMusica: "Hate that...", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/FsU33YTcgIE", NomeArtista: ["Kissxs", "픽보이"],NomeMusica: "Hands On Me", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/6FKjVspmU-s", NomeArtista: ["KittiB", "유성은"],NomeMusica: "we you", imagem: "assets/icon/logo.png"},
  
        {url: "https://youtu.be/1-rD_vr_2xQ", NomeArtista: ["BTOB"], NomeMusica:"OutSider",imagem:""},
        {url: "https://youtu.be/6zsy0Er9w0s", NomeArtista: ["kimparkjeje"],NomeMusica: "dong dong", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/32TF6_tJ9Ac", NomeArtista: ["POLYP "],NomeMusica: "DAWN808", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/vLIFMsXOoQM", NomeArtista: ["EMBER RECORDS"],NomeMusica: "Ember", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/8sY7uUMkFdo", NomeArtista: ["SUNGMIN "],NomeMusica: "Blooming", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/kxIS0RfF_bU", NomeArtista: ["Ha Hyun Sang"],NomeMusica: "Stone", imagem: "assets/icon/logo.png"},
      ],data : "30/08"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/J2RIVVOI__A", NomeArtista: ["Seasoning"],NomeMusica: "Paradise", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/t7v55lCIu9o", NomeArtista: ["Rojo"],NomeMusica: "Purple Wave", imagem: "assets/icon/logo.png"},
        
        {url: "https://youtu.be/Ak79F21AEgc", NomeArtista: ["MCND"],NomeMusica: "Movin'", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/hbtR1OmJJmM", NomeArtista: ["Knockloud"],NomeMusica: "Beomi-Good Night", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/oynyFdUi3vI", NomeArtista: ["JI JIN SEOK"],NomeMusica: "Our Dawn", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/iyiX0cs5swM", NomeArtista: ["BAEKHYUN"],NomeMusica: "Is it me?", imagem: "assets/icon/logo.png"},
        {url: "https://youtu.be/A6YFRMX8kXo", NomeArtista: ["Onestar"],NomeMusica: "Love Your Everything", imagem: "assets/icon/logo.png"},
      ],data : "31/08"}
      );
     
      return week;
    }

    
    public createMonthSeptember(){
  
      let num : DayRadar[] = this.createSeptemberWeek1();
      this.kpopoverseas[8].weeks[0].dia = num;
      this.kpopoverseas[8].weeks[0].weekNumber = "1";
  
        num = this.createSeptemberWeek2();
        this.kpopoverseas[8].weeks.push({dia:num, weekNumber:"2"});
        
        num = this.createSeptemberWeek3();
        this.kpopoverseas[8].weeks.push({dia:num, weekNumber:"3"});
  
        num = this.createSeptemberWeek4();
        this.kpopoverseas[8].weeks.push({dia:num, weekNumber:"4"});
  
        num = this.createSeptemberWeek5();
        this.kpopoverseas[8].weeks.push({dia:num, weekNumber:"5"});

    }

    public createSeptemberWeek1(){
      var week: DayRadar[] = [];
  
      week.push({musicas: [
        {url: "https://youtu.be/BjmmvBMXbSU", NomeArtista: ["Fromis_9"],NomeMusica: "Talk & Talk", imagem: ""},
        {url: "https://youtu.be/TbY5JewATYA", NomeArtista: ["Yeo Eun"],NomeMusica: "At least once", imagem: ""},
        {url: "https://youtu.be/gCu7VUL47wU", NomeArtista: ["Nam Saera"],NomeMusica: "To Yesterday", imagem: ""},
        {url: "https://youtu.be/I3XA-t57Z6c", NomeArtista: ["Roa"],NomeMusica: "Summer Night", imagem: ""},
        {url: "https://youtu.be/a4zIWdhVJ8g", NomeArtista: ["Azer-Blossom"],NomeMusica: "Focus on me", imagem: ""},

        
        {url: "https://youtu.be/1mvQF-ucSiA", NomeArtista: ["Lee Eun Sang"],NomeMusica: "Lemonade", imagem: ""},
        {url: "https://youtu.be/2aHNwLx5Es8", NomeArtista: ["homezone"],NomeMusica: "Swin", imagem: ""},
        {url: "https://youtu.be/9Jo3ApHkweM", NomeArtista: ["Kyuhyun"],NomeMusica: "On A Starry Night", imagem: ""},
        {url: "https://youtu.be/K-tvQ6l-DwE", NomeArtista: ["Dokdo Reed Guardians"],NomeMusica: "dig it? Dokdo", imagem: ""},
      ],
      data : "01/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/JHiY3-mWPX0", NomeArtista: ["Young", "amin"], NomeMusica: "Drive ", imagem: ""},
        
        {url: "https://youtu.be/gZoWv5Vw42k", NomeArtista: ["A.C.E"],NomeMusica: "Changer", imagem: ""},
        {url: "https://youtu.be/NkAM3CORdzE", NomeArtista: ["W.A.O"],NomeMusica: "OMW (On My Way)", imagem: ""},
        {url: "https://youtu.be/HAKWiomg8Ac", NomeArtista: ["W.A.O"],NomeMusica: "Dizzy", imagem: ""},
        {url: "https://youtu.be/o9Qq-rw-VmY", NomeArtista: ["Heo Young Saeng"],NomeMusica: "MI CASA SU CASA", imagem: ""},
        {url: "https://youtu.be/8FtD9nybAlo", NomeArtista: ["ONEUS"],NomeMusica: "ONEUS THEATRE : Life is Beautiful", imagem: ""},
        //{url: "https://youtu.be/76Y8_PRj600", NomeArtista: [""],NomeMusica: "", imagem: ""},
      ],
      data : "02/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/nhtC6-JDGqs", NomeArtista: ["LOONA"],NomeMusica: "Not Friends", imagem: "", urlreview:"https://www.instagram.com/tv/CTXYrr-pLUK"},
        {url: "https://youtu.be/fDB4CkyrR4U", NomeArtista: ["LeeHi", "B.I"],NomeMusica: "Savior", imagem: ""},
        {url: "https://youtu.be/1eedtH-wx48", NomeArtista: ["Yuju(Gfriend)"],NomeMusica: "Stay", imagem: ""},
        {url: "https://youtu.be/aSIjz8k9l0A", NomeArtista: ["Wavycake", "hartts", "Ovus"],NomeMusica: "Way", imagem: ""},
        {url: "https://youtu.be/yb91sP3duzE", NomeArtista: ["Yeonju Kang"],NomeMusica: "Ocean", imagem: ""},
        
        {url: "https://youtu.be/2Wg2BC6Oofg", NomeArtista: ["Common Ground"],NomeMusica: "When the time goes by", imagem: ""},
        
      ],data : "03/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/KesDoCR6JAo", NomeArtista: ["Park Hyunho"],NomeMusica: "Money Money Money", imagem: ""},
        {url: "https://youtu.be/pTGYtEYsAg4", NomeArtista: ["dontworryanu"],NomeMusica: "Everything", imagem: ""},
        {url: "https://youtu.be/6QAAfa1z9p0", NomeArtista: ["Taewoo"],NomeMusica: "hitmeup", imagem: ""},
        ],data : "04/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/ZLsmVhFem0w", NomeArtista: ["Hong JuHyun"],NomeMusica: "Flower", imagem: ""},
        //{url: "https://youtu.be/VDEmn2mjxE4", NomeArtista: [""],NomeMusica: "", imagem: ""},
       ],data : "05/09"}
      );
  
      return week;
    }

    public createSeptemberWeek2(){
      var week: DayRadar[] = [];
  
      week.push({musicas: [
        {url: "https://youtu.be/Xmxcnf2v_gs", NomeArtista: ["STAYC"],NomeMusica: "Stereotype", imagem: "", urlreview:"https://www.instagram.com/p/CTf6SMJMU9i"},
        {url: "https://youtu.be/0woyDsYzuDI", NomeArtista: ["Yooryeong","DJ Tiz"],NomeMusica: "Sunny Day", imagem: ""},
        {url: "https://youtu.be/9oLhyXsRZ7E", NomeArtista: ["Sujin", "Ryu Sera"],NomeMusica: "signs to break up", imagem: ""},
        //{url: "https://youtu.be/BRNbuqjmw1Y", NomeArtista: ["FX"],NomeMusica: "", imagem: ""},
        {url: "https://youtu.be/vjxk5mQvI08", NomeArtista: ["General SSO"],NomeMusica: "초능력 ESP", imagem: "", Descricao:"Gosto muito da artista"},

        {url: "https://youtu.be/VRlZa7w8S3Y", NomeArtista: ["Golden Child"],NomeMusica: "Singing In The Rain", imagem: ""},
        {url: "https://youtu.be/tLcynwlNh38", NomeArtista: ["Young K"],NomeMusica: "Guard You", imagem: ""},
        {url: "https://youtu.be/F8NMIuawGFY", NomeArtista: ["OmegaX"],NomeMusica: "What's goin' on", imagem: ""},
        {url: "https://youtu.be/GumWG_Y6fsM", NomeArtista: ["Jung Dong Ha"],NomeMusica: "What I Want To Say", imagem: ""},
        {url: "https://youtu.be/Q7xqAafv5NU", NomeArtista: ["DAMYE"],NomeMusica: "snap snap snap", imagem: ""},
      ],
      data : "06/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/jyHi7ADzJB8", NomeArtista: ["Baek A Yeon"],NomeMusica: "0%", imagem: ""},
        {url: "https://youtu.be/4KVhDkiB9jQ", NomeArtista: ["Solar(Mamamoo)"],NomeMusica: "Always, be with you", imagem: ""},
        {url: "https://youtu.be/VERNr77UQJ8", NomeArtista: ["Sulgi"],NomeMusica: "The Last Travel", imagem: ""},
        {url: "https://youtu.be/r4EaWrIJ9OA", NomeArtista: ["21univ."],NomeMusica: "Totally My Style", imagem: ""},
        
        {url: "https://youtu.be/SdVUGcHO_zc", NomeArtista: ["Haeun"],NomeMusica: "I Love You", imagem: ""},
        {url: "https://youtu.be/o0-IKr7UHbI", NomeArtista: ["Lee Mingyu"],NomeMusica: "On My Way Home", imagem: ""},
        {url: "https://youtu.be/xSXslki5xIY", NomeArtista: ["Sungmin"],NomeMusica: "Goodnight, Summer", imagem: ""},
      ],
      data : "07/09"}
      );
  
      week.push({musicas: [
        //{url: "https://youtu.be/nMeGsnghfII", NomeArtista: [""],NomeMusica: "Flip It (Galaxy CM)", imagem: ""},
        {url: "https://youtu.be/9o4jA2IimPY", NomeArtista: ["RedChair"],NomeMusica: "Letter to my ex", imagem: ""},
        {url: "https://youtu.be/6LeWSmcH3jY", NomeArtista: ["Ichillin'"],NomeMusica: "Got'Ya", imagem: "", urlreview:"https://www.instagram.com/p/CTs1ZbGJFFu"},
        //{url: "https://youtu.be/7b3WJp_nWRo", NomeArtista: ["Hanabi"],NomeMusica: "", imagem: ""},
        {url: "https://youtu.be/a3ErfnRuT6Q", NomeArtista: ["Meaningful Stone"],NomeMusica: "Dancing in the rain", imagem: ""},
        
        {url: "https://youtu.be/CUvMEdas6Ds", NomeArtista: ["1Kyne"],NomeMusica: "Bop", imagem: ""},
        {url: "https://youtu.be/dOTe44YwRRk", NomeArtista: ["N.Flying"],NomeMusica: "Chance", imagem: ""},
        {url: "https://youtu.be/e2vu1l2jHOA", NomeArtista: ["MEGAMAX "],NomeMusica: "Painted÷LOVE:", imagem: ""},        
      ],data : "08/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/GLlP-CNlY9I", NomeArtista: ["LeeHi", "Yoon Mirae"],NomeMusica: "Red Lipstick", imagem: ""},
        {url: "https://youtu.be/oxCt4V8HwxU", NomeArtista: ["Luli lee"],NomeMusica: "About Summer", imagem: ""},
        {url: "https://youtu.be/JgClEHGKdN8", NomeArtista: ["Ha Yea Song"],NomeMusica: "Your regards", imagem: ""},
        {url: "https://youtu.be/nJLrIbp7-eI", NomeArtista: ["FreezyBone", "UU Milan"],NomeMusica: "FreezyVogue", imagem: ""},
        {url: "https://youtu.be/I0Vzpoif4Mk", NomeArtista: ["Makers","onDa", "YoonKyung"],NomeMusica: "Gray Night", imagem: ""},
        {url: "https://youtu.be/0aaeUI1ucfQ", NomeArtista: ["Hyuna", "Dawn"],NomeMusica: "Ping Pong", imagem: ""},
        
        {url: "https://youtu.be/S5gF6zMZmSk", NomeArtista: ["Nell"],NomeMusica: "U-hee", imagem: ""},
        {url: "https://youtu.be/UWXWKKzQMsA", NomeArtista: ["Luminous"],NomeMusica: "Run", imagem: ""},
        {url: "https://youtu.be/HPS3OaQpSu4", NomeArtista: ["Jeon WooSung"],NomeMusica: "I'm afraid I'll stop liking it.", imagem: ""},
        ],data : "09/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/awkkyBH2zEo", NomeArtista: ["Lisa"],NomeMusica: "Lalisa", imagem: "", urlreview:"https://www.instagram.com/p/CTqBFDPJVwN"},
        {url: "https://youtu.be/gjyEcSim4js", NomeArtista: ["BiBi"],NomeMusica: "PADO", imagem: "", urlreview:"https://www.instagram.com/p/CT8QBKVplw9"},
        {url: "https://youtu.be/WFJlFOlQmxU", NomeArtista: ["Yerin Baek"],NomeMusica: "Why Me?", imagem: ""},
        
        {url: "https://youtu.be/3GPVjQt34D8", NomeArtista: ["WeAreYoung"],NomeMusica: "For You", imagem: ""},
        {url: "https://youtu.be/cO-IvuNjaYY", NomeArtista: ["Muddy Red", "oceanfromtheblue", "Deliman"],NomeMusica: "Rollin’", imagem: ""},
        //{url: "", NomeArtista: [""],NomeMusica: "", imagem: ""},
       ],data : "10/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/a1GxiIr6IEU", NomeArtista: ["Veautiful Biew"],NomeMusica: "DUMPED", imagem: ""},
        //{url: "", NomeArtista: [""],NomeMusica: "", imagem: ""},
      ],data : "11/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/l81arx3ev0g", NomeArtista: ["Hwang Chi Yeul"],NomeMusica: "Too late", imagem: ""},
        //{url: "", NomeArtista: [""],NomeMusica: "", imagem: ""},
      ],data : "12/09"}
      );
  
      return week;
    }

    public createSeptemberWeek3(){
      var week: DayRadar[] = [];
  
      week.push({musicas: [
        {url: "https://youtu.be/JKfGfLJhTDU", NomeArtista: ["Sound Surgeon", "Dori"],NomeMusica: "If You, If I", imagem: ""},
        {url: "https://youtu.be/mNSk7W6bod8", NomeArtista: ["Luci Gang"],NomeMusica: "Nagageodeun", imagem: ""},
        {url: "https://youtu.be/wnlh9yoxBek", NomeArtista: ["Zia"],NomeMusica: "Please", imagem: ""},

        {url: "https://youtu.be/_TgdvzrWv0g", NomeArtista: ["Ateez"],NomeMusica: "Deja Vu", imagem: ""},
        {url: "https://youtu.be/b2Aj9fSUCQk", NomeArtista: ["Young K"],NomeMusica: "Come as you are", imagem: ""},
        {url: "https://youtu.be/o18DRTNpS4Q", NomeArtista: ["Baehyuni"],NomeMusica: "Land adn Sea", imagem: ""},
        {url: "https://youtu.be/rOfDyaRWClQ", NomeArtista: ["Yun DDanDDan"],NomeMusica: "Will smile", imagem: ""},
        {url: "https://youtu.be/IjSdJbJzXLI", NomeArtista: ["Lee Mingyu"],NomeMusica: "On My Way Home", imagem: ""},
        //{url: "https://youtu.be/SgF9uoaIPwE", NomeArtista: [""],NomeMusica: "", imagem: ""},
      ],
      data : "13/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/ww9hZfgC2d8", NomeArtista: ["LeeHi", "Wonstein"],NomeMusica: "H.S.K.T.", imagem: "boa vibe", urlreview:"https://www.instagram.com/p/CT-2Ku_JbcS"},

        {url: "https://youtu.be/q03Y8mG4Asg", NomeArtista: ["Wonho"],NomeMusica: "Blue", imagem: ""},
        {url: "https://youtu.be/32jie-a4lF8", NomeArtista: ["Dwigon"],NomeMusica: "With you", imagem: ""},
        {url: "https://youtu.be/WHkQtNBCRQo", NomeArtista: ["Lee Mujin"],NomeMusica: "Fall in Fall", imagem: ""},
        {url: "https://youtu.be/_6kZcZvFmHc", NomeArtista: ["Han Yo Han","Changmo"],NomeMusica: "This Is Me", imagem: ""},
      ],
      data : "14/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/boAKqlSYAbQ", NomeArtista: ["Chuu(Loona)","Kim yohan"],NomeMusica: "World is one 2021", imagem: ""},
        {url: "https://youtu.be/ajxfoVrXdKw", NomeArtista: ["Mamamoo"],NomeMusica: "mumumumuch", imagem: "", urlreview:"https://www.instagram.com/p/CT5wnEmFuml"},
        {url: "https://youtu.be/KRzB-Wib7VI", NomeArtista: ["Kim Yuna", "Wonstein"],NomeMusica: "Song For You", imagem: ""},
        {url: "https://youtu.be/TUgNpB50VAw", NomeArtista: ["Soppy"],NomeMusica: "A Long night", imagem: ""},
        {url: "https://youtu.be/Tpz99Tyt1B0", NomeArtista: ["HYNN"],NomeMusica: "Running in the sky", imagem: ""},
        {url: "https://youtu.be/FlZIdVjSkeE", NomeArtista: ["Jamie", "Jmin"],NomeMusica: "No Numbers", imagem: ""},
        
        {url: "https://youtu.be/Zd31yLSKJ2c", NomeArtista: ["Joosiq"],NomeMusica: "Think About You", imagem: ""},
        //{url: "https://youtu.be/NFOAl-Y0Frw", NomeArtista: ["Junhee Lee"],NomeMusica: "", imagem: ""},
        {url: "https://youtu.be/1oOZZz1ChFg", NomeArtista: ["Yang Da Il", "Bumkey"],NomeMusica: "Home", imagem: ""},
        {url: "https://youtu.be/SczDFXSXX3g", NomeArtista: ["off the menu"],NomeMusica: "Lovers in Seoul", imagem: ""},
        {url: "https://youtu.be/mbESmq1_vRA", NomeArtista: ["Jeon Sang Keun"],NomeMusica: "Natural Sorrow", imagem: ""},        
      ],data : "15/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/mzgV1GE1QUY", NomeArtista: ["Celine"],NomeMusica: "Lemon Balm", imagem: ""},
        {url: "https://youtu.be/P3YURx8awqQ", NomeArtista: ["Seori", "eaj"],NomeMusica: "Dive with you", imagem: ""},
        {url: "https://youtu.be/oiBUk_NjIwU", NomeArtista: ["Pritti-G"],NomeMusica: "Buckle up", imagem: ""},

        {url: "https://youtu.be/BIfjbX6hJBc", NomeArtista: ["Jeonghan"],NomeMusica: "Dream", imagem: "", Descricao:"A levada calma da música é boazin"},
        {url: "https://youtu.be/wZsJjI8YqRI", NomeArtista: ["Goopy"],NomeMusica: "Teenage", imagem: ""},
        {url: "https://youtu.be/tJSOuwt9EAQ", NomeArtista: ["KIM WOOJIN"],NomeMusica: "My growing pains", imagem: ""},
        ],data : "16/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/s9djn7f7qy8", NomeArtista: ["Ripley"],NomeMusica: "Magnet", imagem: ""},
        {url: "https://youtu.be/88PbEgxkbbo", NomeArtista: ["Baek A"],NomeMusica: "Spaceship", imagem: ""},
        
        {url: "https://youtu.be/JtkFsKuhtHA", NomeArtista: ["MVP"],NomeMusica: "I'm a go", imagem: ""},
        {url: "https://youtu.be/1oYWnbTSang", NomeArtista: ["NCT 127"],NomeMusica: "Sticker", imagem: ""},
        {url: "https://youtu.be/aRTUUJkIndA", NomeArtista: ["BAE173"],NomeMusica: "Melody", imagem: ""},
        {url: "https://youtu.be/v0mnJIo1Njc", NomeArtista: ["HBK Lee"],NomeMusica: "I Can't Stop Loving You", imagem: ""},
        {url: "https://youtu.be/HeiJ-jCInPA", NomeArtista: ["Brown Tigger", "Layone","Basick"],NomeMusica: "Open up the shutters", imagem: ""},
       ],data : "17/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/XrrlhaiewfI", NomeArtista: ["NUOL"," Sound Kim","Boi B"],NomeMusica: "With me", imagem: ""},
        {url: "https://youtu.be/8Z-Gd7mTmgk", NomeArtista: ["Kim Suyoung"],NomeMusica: "Suddenly I Thought", imagem: ""},

      ],data : "18/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/dxcgZ__r-SU", NomeArtista: ["Wooks"],NomeMusica: "I'll be There", imagem: ""},
        {url: "https://youtu.be/eV_lBZsRIO8", NomeArtista: ["DK(December)"],NomeMusica: "On that night", imagem: ""},
        {url: "https://youtu.be/iFnivCcu8Dw", NomeArtista: ["SOMDEF", "GSoul"],NomeMusica: "It was", imagem: ""},
      ],data : "19/09"}
      );
  
      return week;
    }

    public createSeptemberWeek4(){
      var week: DayRadar[] = [];
  
      week.push({musicas: [
        {url: "https://youtu.be/OQUVw0eI0eo", NomeArtista: ["Woo Yerin"],NomeMusica: "Night Flower", imagem: ""},
        {url: "https://youtu.be/njAO9cB_yvI", NomeArtista: ["Aster","Neo"],NomeMusica: "ON & ON", imagem: ""},
        
        {url: "https://youtu.be/h_jAPjbdILM", NomeArtista: ["Yang Yoseop"],NomeMusica: "Brain", imagem: ""},
        {url: "https://youtu.be/ZesppXuPLeM", NomeArtista: ["Yukika"],NomeMusica: "loving you", imagem: ""},
      ],
      data : "20/09"}
      );
  
      week.push({musicas: [
        //{url: "", NomeArtista: [""],NomeMusica: "", imagem: ""},
      ],
      data : "21/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/zeI1RXSK1YY", NomeArtista: ["Joosiq"],NomeMusica: "Think About you", imagem: ""},
        {url: "https://youtu.be/Fm4hpMcP8jo", NomeArtista: ["Kebee", "Bumkey"],NomeMusica: "Train Bed", imagem: ""},
        
      ],data : "22/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/bDqVnMWxqwY", NomeArtista: ["Beauty Box"],NomeMusica: "Rat A Tat", imagem: ""},
        {url: "https://youtu.be/6A6eSRx7RuA", NomeArtista: ["WJSN"],NomeMusica: "Let me in", imagem: ""},
        {url: "https://youtu.be/xbdR_BPsqE8", NomeArtista: ["Awon"],NomeMusica: "Windy Rain", imagem: ""},
        //{url: "https://youtu.be/wTFXXgGbiKQ", NomeArtista: ["Jo Yuri"],NomeMusica: "", imagem: ""},
        
        {url: "https://youtu.be/Hm4pLX6-egI", NomeArtista: ["Seo actor", "Dept", "Sonny Zero","Ashley Alisha"],NomeMusica: "Closer", imagem: ""},
        {url: "https://youtu.be/pvr5z0ocZJQ", NomeArtista: ["Norazo"],NomeMusica: "Buy now Think later", imagem: ""},
        ],data : "23/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/MjCZfZfucEc", NomeArtista: ["ITZY"],NomeMusica: "Loco", imagem: ""},
        //{url: "https://youtu.be/mZlsvAgc8KI", NomeArtista: [""],NomeMusica: "Slowly loving you", imagem: ""},
        {url: "https://youtu.be/WaSDL0dsDsY", NomeArtista: ["Hayan"],NomeMusica: "Hwi Hwi", imagem: ""},
        {url: "https://youtu.be/e6fwm1hV97I", NomeArtista: ["yourbeagle", "Bigone"],NomeMusica: "How to Love", imagem: ""},
        {url: "https://youtu.be/maYYrJXKq3Q", NomeArtista: ["Jeon Mido"],NomeMusica: "Butterfly", imagem: ""},
        {url: "https://youtu.be/4hHIvQEVazU", NomeArtista: ["Kim Sawol"],NomeMusica: "Lonely", imagem: ""},

        
        {url: "https://youtu.be/6KdsZDzaEv4", NomeArtista: ["Onestar"],NomeMusica: "September 24th", imagem: ""},
        //{url: "https://youtu.be/uNzHXdhMp_A", NomeArtista: [""],NomeMusica: "", imagem: ""},
        {url: "https://youtu.be/FSg_AXZXmm0", NomeArtista: ["Born Wild"],NomeMusica: "Uncle", imagem: ""},
        {url: "https://youtu.be/NApvRGjnLCQ", NomeArtista: ["Kebee"],NomeMusica: "Show", imagem: ""},
        {url: "https://youtu.be/j3ITqBa_TW4", NomeArtista: ["Mido and Falasol"],NomeMusica: "Someday", imagem: ""},
        {url: "https://youtu.be/iJo5AI0lYGM", NomeArtista: ["Pretty Brown"],NomeMusica: "Come Like the Wind", imagem: ""},
       ],data : "24/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/mNlryT23RPc", NomeArtista: ["PIXY"],NomeMusica: "Still with me", imagem: ""},
        //{url: "https://youtu.be/KoUS6onUezE", NomeArtista: [""],NomeMusica: "", imagem: ""},
        
        {url: "https://youtu.be/BSQN16Is9qU", NomeArtista: ["Do HanSe"],NomeMusica: "Take Over", imagem: ""},
        {url: "https://youtu.be/Zu2jAE73IiA", NomeArtista: ["Sikboy", "Skull"],NomeMusica: "Dreads", imagem: ""},
      ],data : "25/09"}
      );
  
      week.push({musicas: [
        {url: "https://youtu.be/fk67LiNYWEw", NomeArtista: ["Sojeong"],NomeMusica: "Nothing Between Us", imagem: ""},
        {url: "https://youtu.be/v0qo0BxzXt8", NomeArtista: ["Parkjiwoo"],NomeMusica: "Already know", imagem: ""},
        
        {url: "https://youtu.be/GIRRP-yZoi8", NomeArtista: ["Kim JaeHwan"],NomeMusica: "Be the light", imagem: ""},
      ],data : "26/09"}
      );
  
      return week;
    }

    public createSeptemberWeek5(){
      var week: DayRadar[] = [];
  
      week.push({musicas: [
        {url: "", NomeArtista: [""],NomeMusica: "", imagem: ""},
      ],
      data : "27/09"}
      );
  
      week.push({musicas: [
        {url: "", NomeArtista: [""],NomeMusica: "", imagem: ""},
      ],
      data : "28/09"}
      );
  
      week.push({musicas: [
        {url: "", NomeArtista: [""],NomeMusica: "", imagem: ""},
        
      ],data : "29/09"}
      );
  
      week.push({musicas: [
        {url: "", NomeArtista: [""],NomeMusica: "", imagem: ""},
        ],data : "30/09"}
      );
  
      return week;
    }

  }
  
