import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChatsService } from '../services/chats.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  iconUrl = '../../assets/moon-inside-a-circle-svgrepo-com.svg';
  colorTheme = 'sombre';


  constructor( private navCtrl: NavController , private chatservice: ChatsService) { }

  ngOnInit() {
  }

  onToggleColorTheme(event) {
    console.log(event);

    console.log(event.detail.checked);
    if (event.detail.checked)
    {
      document.body.setAttribute('color-theme', 'dark');
      this.iconUrl = '../../assets/sun.svg';
      this.colorTheme = 'eclairé';
    } else {
      document.body.setAttribute('color-theme', 'light');
      this.iconUrl = '../../assets/moon-inside-a-circle-svgrepo-com.svg';
      this.colorTheme = 'sombre';
    }
  }

logout() {
    this.chatservice.signOut()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      });
  }

}
