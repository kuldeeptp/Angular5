import {Component, OnInit, ViewChild} from '@angular/core';

import * as socketIo from 'socket.io-client';
import { CompileDirectiveMetadata } from '@angular/compiler';
import { environment } from '../environments/environment';

import {MatSort, MatSortable, MatPaginator, MatTableDataSource} from '@angular/material';
import {Ambtracking} from './model/ambtracking';
import {Marker} from './model/marker';
import {AmbtrackingService} from './service/ambtracking.service';


interface Location {
  lang: number;
  lat: number;
}


const SERVER_URL = environment.socketUrl;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  private socket;
  ambtracking: Ambtracking[];
  loginlocation: Location;
  displayedColumns = ['id', 'ambassadorid', 'created', 'logintime', 'loginimageurl' ];
  // , 'jobdetailsId', 'jobscheduledate', 'jobscheduleid', 'lastupdated', 'logintime'  , 'loginimageurl'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  zoom = 5;

  // initial center position for the map
  lat = 51.673858;
  lng = 7.815982;
  msg = '';

  markers: Marker[] = [];

  constructor(private _ambtrack: AmbtrackingService) {
    this.socket = socketIo(SERVER_URL);
  }

  ngOnInit() {
    this._ambtrack.getTrackingData()
            .subscribe(res => {
              this.ambtracking = res;
              // this.dataSource.paginator = this.paginator;
              res.forEach(job  => {
                this.loginlocation = JSON.parse(job.loginlocation.replace(/'/g, '"'));
                this.lat = this.loginlocation.lat;
                this.lng = this.loginlocation.lang;
                this.markers.push({
                  lat: this.loginlocation.lat,
                  lng: this.loginlocation.lang,
                  label : '' + job.id,
                  content : 'ID : ' + job.id + '<br/> AmbID : ' + job.ambassadorid,
                  draggable: true
                });
              });
               this.dataSource = new MatTableDataSource<Ambtracking>(this.ambtracking);
               this.dataSource.sort = this.sort;
               this.dataSource.paginator = this.paginator;
              console.log(this.ambtracking);
            });

    this.socket.on('amblogin', ( data ) => {
      data.loginlocation = JSON.parse(data.loginlocation.replace(/'/g, '"'));
      // console.log('loginlocation', data.loginlocation);
      this.ambtracking.push(data);
      this.lat = data.loginlocation.lat;
      this.lng = data.loginlocation.lang;
        this.markers.push({
          lat: data.loginlocation.lat,
          lng: data.loginlocation.lang,
          label: '' + data.id,
          content : 'ID : ' + data.id + '<br/> AmbID : ' + data.firstname,
          draggable: true
        });
    });
  }
}
/*
{

  "ambassadorid": 1169,
  "sessiontimesid": 2911,
  "jobdetailsid": 254,
  "jobscheduleid": 0,
  "venueid": 410,
  "jobscheduledate": "2018-05-20",
  "logintime": "2018-05-20 14:01:57",
  "loginlocation": "{'lang':147.1343183,'lat':-32.852692}",
  "loginimageurl": "signin_250_1161_410_2911_1526788917085.jpg",
  "setuptime": "",
  "setuplocation": "",
  "setupimageurl": "",
  "logouttime": "",
  "logoutlocation": "",
  "logoutimageurl": "",
  "published": 0,
  "trackingstatus": 0,
  "extrainfo": "",
  "created": "2018-05-20 01:04:30",
  "lastupdated": "2018-05-20 01:04:30"

}
*/
