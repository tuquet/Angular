import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { NotificationService } from 'app/core/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private notification: NotificationService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  useSidebar() {
    if ($('.has-sidebar').hasClass('small-sidebar')) {
      $('.has-sidebar').removeClass('small-sidebar');
      $('.btn-sidebar-toggle').removeClass('active');
    } else {

      $('.has-sidebar').addClass('small-sidebar');
      $('.btn-sidebar-toggle').addClass('active');
    }
  }

  logout() {
    this.authenticationService.logout().subscribe(xxxx => {
      console.log('hhhhhhhh ', xxxx);
      this.notification.showNotification('ログアウトが完了しました');
    })
  }

}
