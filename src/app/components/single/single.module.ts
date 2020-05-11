
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SingleRoutingModule } from './single-routing.module';
import { SingleComponent } from './single.component';
import { FlickrService } from '../../services/flickr/flickr.service';

@NgModule({

    imports: [CommonModule, SingleRoutingModule, FormsModule, ReactiveFormsModule],

    declarations: [SingleComponent],

    providers : [ FlickrService ]
})
export class SingleModule {

}
