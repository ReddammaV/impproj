import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  loading: boolean;
  constructor(private loaderService: LoaderService) {
    // setTimeout(function(){ alert("Hello"); }, 3000);
    this.loaderService.isLoading.subscribe((v) => {
      // console.log(v);
      this.loading = v;
    });
  }
  ngOnInit() {
  }

}
