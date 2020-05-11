
/* =======================================================
 *
 * Created by anele on 2020/05/04.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlickrComponent } from './flickr.component';
import { FlickrRoutingModule } from './flickr-routing.module';
import { FlickrService } from '../../services/flickr/flickr.service';

@NgModule({

    imports: [CommonModule, FlickrRoutingModule],

    declarations: [FlickrComponent],

    providers : [ FlickrService ]
})
export class FlickrModule {}

