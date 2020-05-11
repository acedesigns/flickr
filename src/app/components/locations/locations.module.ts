
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


import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { FlickrService } from '../../services/flickr/flickr.service';

@NgModule({

    imports: [ CommonModule, LocationsRoutingModule ],

    declarations: [ LocationsComponent ],

    providers : [ FlickrService ]
})
export class LocationsModule {}
