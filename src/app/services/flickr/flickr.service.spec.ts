
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

import { FlickrService } from './flickr.service';

describe('FlickrService', () => {

    let testService: FlickrService;

    configureTestSuite(() => {

        TestBed.configureTestingModule({

            imports : [ HttpClientTestingModule ],

            providers : [ FlickrService ],

            schemas: [ NO_ERRORS_SCHEMA ],

            declarations: [  ]
        });

    });

    beforeEach(() => {
        testService = TestBed.get(FlickrService);
    });

    it('should create FlickrService', fakeAsync(() => {
        expect(testService).toBeTruthy();
    }));



});
