import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  task: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.task = this.route.snapshot.params['task'];
    console.log(this.task);
    if (this.task)  {
      console.log(this.task);
    }
  }

}
