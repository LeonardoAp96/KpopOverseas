import { StorageService } from './../Service/storage.service';
import { Component } from '@angular/core';
import { FirebaseFirestore } from '@angular/fire';
// import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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

  studentList = [];
  studentData: StudentData;
  studentForm: FormGroup;

  constructor(private storage: StorageService,
    private firebaseService: FirebaseService,
    public fb: FormBuilder
  ) {
    this.listCardsRadar = storage.listCardsRadar;
    this.studentData = {} as StudentData;
  }

  ngOnInit() {

    this.studentForm = this.fb.group({
      Name: ['', [Validators.required]],
      Age: ['', [Validators.required]],
      Address: ['', [Validators.required]]
    })

    this.firebaseService.read_students().subscribe(data => {

      this.studentList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.studentList);

    });
  }

  CreateRecord() {
    console.log(this.studentForm.value);
    this.firebaseService.create_student(this.studentForm.value).then(resp => {
      this.studentForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.firebaseService.delete_student(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.firebaseService.update_student(recordRow.id, record);
    recordRow.isEdit = false;
  }
  public listCardsRadar : CardsRadar[];

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
