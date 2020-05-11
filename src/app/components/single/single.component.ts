
/* =======================================================
 *
 * Created by anele on 2020/05/05.
 *
 * @anele_ace
 *
 * =======================================================
 */


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlickrService } from '../../services/flickr/flickr.service';

@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

    photoID: number;
    singlePhoto: Object;

    constructor(private activeRoute: ActivatedRoute, private service: FlickrService) { }

    ngOnInit() {
        this.photoID = this.activeRoute.snapshot.params['single'];

        this.service.getSinglePhotoInfo(this.photoID).subscribe(
            value => {
                console.log(value);
                this.singlePhoto = value;
            });
    }

}
