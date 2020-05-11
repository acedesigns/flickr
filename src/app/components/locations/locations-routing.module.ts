
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
import { LocationsComponent } from './locations.component';


const routes: Routes = [
    {
        path: '', component: LocationsComponent
    }
];

@NgModule({

    imports: [ RouterModule.forChild(routes), ],

    exports: [ RouterModule,  ]
})
export class LocationsRoutingModule {}
