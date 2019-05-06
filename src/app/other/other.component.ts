import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Repo } from '../repo';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  repo:Repo

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
  }

}
