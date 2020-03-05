import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mission-pages',
  templateUrl: './mission-pages.component.html',
  styleUrls: ['./mission-pages.component.css']
})
export class MissionPagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnAjoutMission(){
    alert("test");
  }
}
