import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../shared/http-service.service';

@Component({
  selector: 'app-items-fetcher',
  templateUrl: './items-fetcher.component.html',
  styleUrls: ['./items-fetcher.component.css']
})
export class ItemsFetcherComponent implements OnInit {


  items: string[] = [];
  constructor(private srv: HttpServiceService) { }


  ngOnInit() {
    
    this.srv.getPostList().subscribe(res => {
      this.items = res
    });

  }

}
