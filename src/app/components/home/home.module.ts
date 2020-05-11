
/* =======================================================
 *
 * Created by anele on 2020/05/05.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FlickrService } from '../../services/flickr/flickr.service';

@NgModule({

    imports: [CommonModule, HomeRoutingModule ],

    declarations: [ HomeComponent ],

    providers : [ FlickrService ]
})
export class HomeModule {}
