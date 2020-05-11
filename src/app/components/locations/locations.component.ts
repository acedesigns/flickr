
/* =======================================================
 *
 * Created by anele on 2020/05/04.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

import { FlickrService } from '../../services/flickr/flickr.service';

@Component({
    selector: 'app-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.scss']
})

export class LocationsComponent implements OnInit {


    public states: any;

    firstFive  = [
        {valu : 'full', 	display: 'Chicago' },
        {valu : 'half', 	display: 'Canada' },
        {valu : 'quarter', 	display: 'Johannesburg' },
        {valu : 'decal', 	display: 'London' },
        {valu : 'tarps', 	display: 'Italy' },
    ];

    secondFive  = [
        {valu : 'full', 	display: 'Alabama' },
        {valu : 'half', 	display: 'California' },
        {valu : 'quarter', 	display: 'Peru' },
        {valu : 'decal', 	display: 'Egypt' },
        {valu : 'tarps', 	display: 'Moscow' },
    ];

    constructor(private service: FlickrService, private router: Router) {}


    ngOnInit() {
        this.service.getJsonData().subscribe(
            data => { this.states = data;  }
        );
    }


    imagesFromLocation(location) {
        this.router.navigate(['/location', location.toLowerCase()]);
    }


}
