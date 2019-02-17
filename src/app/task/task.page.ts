import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  task: any;

  constructor(private route: ActivatedRoute, private afDB: AngularFireDatabase) { }

  ngOnInit() {
    let taskId = this.route.snapshot.params['id'];

    if (taskId) {
      this.getTaskDetails(taskId);
    }
  }

  getTaskDetails(taskId: any): any {
    this.afDB.object("tasks/" + taskId)
      .snapshotChanges().subscribe(res => {
        this.task = res.payload.val();
        console.log(this.task);
      });
  }

}
