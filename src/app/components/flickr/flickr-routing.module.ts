
/* =======================================================
 *
 * Created by anele on 2020/05/04.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlickrComponent } from './flickr.component';


const routes: Routes = [
    {
        path: '', component: FlickrComponent
    }
];

@NgModule({

    imports: [ RouterModule.forChild(routes), ],

    exports: [ RouterModule,  ]
})
export class FlickrRoutingModule {}
