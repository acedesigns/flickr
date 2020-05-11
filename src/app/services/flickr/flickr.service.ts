
/* =======================================================
 *
 * Created by anele on 2020/05/04.
 * https://stackoverflow.com/questions/8753672/
 * @anele_ace
 *
 * =======================================================
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

    apiKey  = 'fe2b00007676770451fa8b4bb61bdef2';
    APIURLSEARCH  = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
    APIURLSEARCH_ID  = 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo';

    pastDate: Date = new Date('29 December 2019');


    constructor( private http: HttpClient ) {  }


    getResult(query: any, queryLimit: number) {
        // tslint:disable-next-line:max-line-length
        const url = `${this.APIURLSEARCH}&api_key=${this.apiKey}&per_page=${queryLimit}&lat=${query.lat()}&lon=${query.lng()}&format=json&max_upload_date=${this.pastDate.getTime()}&nojsoncallback=1&accuracy=11`;


        return this.http.get(url)
            .pipe(map ( (val: any) => {
                if (val.stat === 'ok') {
                    return val.photos.photo.map( (photo: any) => {
                        return {
                            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
                            title: photo.title,
                            photoID: photo.id
                        };
                    });
                } else {
                    return [];
                }
            }));
    }


    getJsonData() {
        return this.http.get('./assets/data/us_states.json').pipe();
    }


    getSinglePhotoInfo(photoID: number) {
        const url = `${this.APIURLSEARCH_ID}&api_key=${this.apiKey}&photo_id=${photoID}&format=json&nojsoncallback=1`;
        return this.http.get(url)
            .pipe(map ( (val: any) => {
                if (val.stat === 'ok') {
                    return val.photo;
                } else {
                    return [];
                }
            }));
    }


    private GETMETHOD(url) {
        return this.http.get(url).pipe(
            map((resp: any) => { return resp; }
        ));
    }

}

