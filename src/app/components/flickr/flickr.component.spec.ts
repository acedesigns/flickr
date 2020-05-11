
/* =======================================================
 *
 * Created by anele on 2020/05/04.
 * @anele_ace
 *
 * =======================================================
 */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, tick, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { configureTestSuite } from 'ng-bullet';
import { FlickrComponent } from './flickr.component';


describe('FlickrComponent', () => {

    let component: FlickrComponent;
    let fixture: ComponentFixture<FlickrComponent>;

    configureTestSuite(() => {


        TestBed.configureTestingModule({

            imports : [ HttpClientTestingModule ],

            providers : [ ],

            schemas: [ NO_ERRORS_SCHEMA ],

            declarations: [ FlickrComponent ]
        });

        fixture = TestBed.createComponent(FlickrComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    afterEach(() => { fixture.destroy(); });


    it('should create the app', () => {
        expect(component).toBeTruthy();
    });


});
