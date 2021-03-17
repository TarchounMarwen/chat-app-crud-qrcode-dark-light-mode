import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { ApiProjetService } from '../../services/api-projet.service';

@Component({
  selector: 'app-projet-details',
  templateUrl: './projet-details.page.html',
  styleUrls: ['./projet-details.page.scss'],
})
export class ProjetDetailsPage implements OnInit {

  id: number ;
  projectDetails: Observable<Project>;



  constructor( private apiService: ApiProjetService, private activatedRoute: ActivatedRoute, private loadingController: LoadingController)
  {
    this.presentLoading();

  }

  ngOnInit() { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.projectDetails = this.apiService.getProject(this.id);
    loading.dismiss();



  }
}
