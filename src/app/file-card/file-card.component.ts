import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.css']
})
export class FileCardComponent implements OnInit {
  entries: Array<any>;
  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
    this.http.get('app/api/data.json')
      .subscribe(res => {
        this.entries = res['list']['entries'];
      })
  }

}
