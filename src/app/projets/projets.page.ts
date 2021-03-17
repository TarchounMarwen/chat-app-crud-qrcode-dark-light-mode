import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { NavController } from '@ionic/angular';
import { ApiProjetService } from '../services/api-projet.service';
import { ChatsService } from '../services/chats.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.page.html',
  styleUrls: ['./projets.page.scss'],
})
export class ProjetsPage implements OnInit {


  projetsList: any;
  constructor(private projetService: ApiProjetService , private navCtrl: NavController , private chatservice: ChatsService )
  {
  }

  ngOnInit() {

    this.projetService.getProjets().subscribe(res => {
      this.projetsList = res;
    },
      err => {
        console.dir(err);
      });

  }



}
