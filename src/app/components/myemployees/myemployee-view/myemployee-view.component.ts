import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-myemployee-view',
  templateUrl: './myemployee-view.component.html',
  styleUrls: ['./myemployee-view.component.scss']
})
export class MyemployeeViewComponent implements OnInit {
  userinfo:any;
  constructor(private apiService: ApiService, 
              private activatedRoute: ActivatedRoute, 
              private router: Router,
              private _location: Location) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.apiService.getEmployee(id).subscribe(data => {
      console.log(data);
      this.userinfo = data;
    })
  }

  backClicked() {
    this._location.back();
  }

}
