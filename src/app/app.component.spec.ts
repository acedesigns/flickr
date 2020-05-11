
/* =======================================================
 *
 * Created by anele on 2020/05/02.
 * @anele_ace
 *
 * =======================================================
 */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, tick, TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { configureTestSuite } from 'ng-bullet';
import { AppComponent } from './app.component';


describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    configureTestSuite(() => {


        TestBed.configureTestingModule({

            imports : [ HttpClientTestingModule ],

            providers : [ ],

            schemas: [ NO_ERRORS_SCHEMA ],

            declarations: [ AppComponent ]
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    afterEach(() => { fixture.destroy(); });


    it('should create the app', () => {
        expect(component).toBeTruthy();
    });


});

