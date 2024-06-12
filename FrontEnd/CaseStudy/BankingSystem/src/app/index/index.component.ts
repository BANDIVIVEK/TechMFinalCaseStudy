import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  notification: string | null = null;

  constructor(private router : Router ,private notificationService: NotificationService) { }

  ngOnInit(): void {
    console.log("hii");
    this.notification = this.notificationService.getNotification();
    console.log("hii");

  }


  closeNotification() {
    this.notification = null;
  }
  navigateTo(page: string) {
    this.router.navigate([page]);
  }

}
