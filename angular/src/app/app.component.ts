import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private httpService: Http) { }

    apiValues: string[] = [];
    public ngOnInit(): void {
        this.httpService.get('/api/values').subscribe(values => {
          this.apiValues = values.json() as string[];
        });
    }
}
