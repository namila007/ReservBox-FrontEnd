import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  public rate;
  public newRate;
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.rate=this.config.rate;
  }
  save() {
    this.config.rate = this.newRate;
    console.log(this.config.rate)
    this.rate = this.config.rate;

  }


}
