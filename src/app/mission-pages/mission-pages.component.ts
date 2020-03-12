import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MissionService } from '../mission.service';
import {IMission} from '../IMission';
import { FormGroup,  FormBuilder,  Validators , FormControl } from '@angular/forms';
@Component({
  selector: 'app-mission-pages',
  templateUrl: './mission-pages.component.html',
  styleUrls: ['./mission-pages.component.css']
})
export class MissionPagesComponent implements OnInit {

  addForm: FormGroup;
  date = new FormControl(new Date());
  DateInitial = new FormControl((new Date()).toISOString());


protected mission$: Observable<IMission[]>;
  constructor(public missionService: MissionService, private fb: FormBuilder) {
    this.createForm();
   }


   createForm() {
    this.addForm = this.fb.group({
      id: ['', Validators.required ],
      nom_mission: ['', Validators.required ],
      lieux: ['', Validators.required ],
      tache: ['', Validators.required],
      date_debut: ['', Validators.required ],
      date_fin: ['', Validators.required ],
      description: ['', Validators.required ]
    });
  }
  ngOnInit() {
    this.missionService.getAllMissions().subscribe(res => {
      this.mission$ = res;
    });
  }
  onClickSubmit(nom_mission , lieux, description , tache , date_debut , date_fin ) {
    const obj = {
      nom_mission,
      lieux,
      description,
      tache ,
      date_debut ,
      date_fin
    };
    this.missionService.SaveNewMissions(obj)
        .subscribe(res => {
          this.missionService.getAllMissions().subscribe( res1 => {
            this.mission$ = res1;
          });
        });
  }


  editerMission(idMission) {
      this.missionService.getMissionById(idMission)
      .subscribe( data => {
        this.addForm.setValue(data);
      });

  }

  ModifierMission(idMission) {
    this.missionService.getMissionById(idMission)
    .subscribe( data => {
      this.addForm.setValue(data);
    });

} 

  SupprimerMission(idMission){
    this.missionService.DeleteMission(idMission)
    .subscribe( data => {
      this.missionService.getAllMissions().subscribe( res1 => {
        this.mission$ = res1;
      });
    });
  }







}
