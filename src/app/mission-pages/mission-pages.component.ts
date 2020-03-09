import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MissionService } from '../mission.service';
import {IMission} from '../IMission';

@Component({
  selector: 'app-mission-pages',
  templateUrl: './mission-pages.component.html',
  styleUrls: ['./mission-pages.component.css']
})
export class MissionPagesComponent implements OnInit {
protected mission$: Observable<IMission[]>;
  constructor(public missionService: MissionService) { }

  ngOnInit() {
    this.missionService.getAllMissions().subscribe(res => {
      this.mission$ = res;
    });
  }

 /* btnAjoutMission() {

  }*/
}
