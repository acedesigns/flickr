
/* =======================================================
 *
 * Created by anele on 2020/05/04.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { FlickrService } from '../../services/flickr/flickr.service';

declare var google: any;

@Component({
    selector: 'app-flickr',
    templateUrl: './flickr.component.html',
    styleUrls: ['./flickr.component.scss']
})

export class FlickrComponent implements OnInit {

    location: string;
    photos: Object;
    loading = true;


    constructor( private activeRoute: ActivatedRoute, private service: FlickrService, private router: Router) {}

    ngOnInit() {
        this.location = this.activeRoute.snapshot.params['location'];

        this.geocodeAddress(this.location);

    }


    onSelectImage(photo) {
        this.router.navigate(['/single', photo.photoID]);
    }


    geocodeAddress( address ) {
        const geocoder = new google.maps.Geocoder();

        geocoder.geocode({'address': address}, (results, status) => {
            if (status === 'OK') {
                this.service.getResult(results[0].geometry.location, 9).subscribe(
                    value => {
                        this.photos = value;
                        this.loading = false;
                    });

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }


}
