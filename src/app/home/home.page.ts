import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // tasks: Observable<any[]>;
  tasks: any;

  constructor(private afDB: AngularFireDatabase) {
    //this.tasks = afDB.list('tasks').valueChanges();
    this.getAllTasks();
  }

  getAllTasks() {
        this.afDB.list('tasks').snapshotChanges().subscribe(items => {
          this.tasks = items.map(a => {
            const data = a.payload.val();
            const id = a.payload.key;
            return { id, ...data };
          });
          console.log(this.tasks);
        });
  }
}
