
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
import { SingleComponent } from './single.component';


const routes: Routes = [
    {
        path: '', component: SingleComponent
    }
];

@NgModule({

    imports: [ RouterModule.forChild(routes), ],

    exports: [ RouterModule,  ]
})
export class SingleRoutingModule {}
