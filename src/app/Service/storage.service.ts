import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AngularFireDatabase } from 'angularfire2/database';

interface CardsRadar{
  imagem: String;
  url: String;
  NomeMusica: String;
  NomeArtista: String[];
  Descricao: String;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  public listCardsRadar : CardsRadar[];
  collectionName = 'Students';

  constructor(private storage: Storage, 
    private firestore: AngularFireDatabase
  ) {
    this.PopularWeek();
  }
  
  getAll(){
    return this.firestore.list('lista/');
  }

  async ngOnInit() {
      await this.storage.create();
  }

  create_student(record) {
    return this.firestore.list(this.collectionName).push(record);
  }

  read_students() {
    return this.firestore.list(this.collectionName).snapshotChanges();
  }

  update_student(recordID, record) {
    this.firestore.object(this.collectionName + '/' + recordID).update(record);
  }

  delete_student(record_id) {
    this.firestore.object(this.collectionName + '/' + record_id).remove();
  }

  PopularWeek(){
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
