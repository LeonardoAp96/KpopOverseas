import { StorageService, CardsRadar, MonthRadar, WeekRadar, DayRadar } from './../Service/storage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.page.html',
  styleUrls: ['./radar.page.scss'],
})
export class RadarPage{
  
    public Weeks: number;
    public nameMonth: String;
    public kpopoverseas : MonthRadar[] = [];
    
    public listCardsRadar : WeekRadar;
  
    constructor(private storage: StorageService){
      
      this.PreencherMonths(12);
      this.Weeks = 1;
      this.createMonthAugust(true);
      
      this.listCardsRadar = this.kpopoverseas[7].weeks[this.Weeks-1];
      this.nameMonth = this.kpopoverseas[7].nameMonth;
    }
  
    ionViewDidEnter(){
      this.createMonthAugust(false);
    }
    public ConvertImg(url: String){
      let str = url.split('/');
  
      return "https://i.ytimg.com/vi/" + str[str.length-1] + "/maxresdefault.jpg";
    }
  
    public SelectWeeks(week: number){
      this.listCardsRadar = this.kpopoverseas[7].weeks[week-1];
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
  }
  