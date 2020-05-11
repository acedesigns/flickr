
/* =======================================================
 *
 * Created by anele on 2020/05/04.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FlickrService } from '../../services/flickr/flickr.service';

declare var google: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    photos: number;
    loading = true;
    map: any;

    @ViewChild('map') mapElement: ElementRef;

    constructor( private service: FlickrService,  private router: Router, public zone: NgZone) { }

    ngOnInit() {
        this.loadMaps();
    }

    onSelectImage(photo) {
        this.router.navigate(['/single', photo.photoID]);
    }

    loadMaps() {

        this.zone.run(() => {

            this.map = new google.maps.Map(this.mapElement.nativeElement, {
                zoom: 10,
                center: { lat: 41.83456263553593, lng: -73.74224609375 }, // lat: 41.83456263553593, long: -73.74224609375
                disableDoubleClickZoom: false,
                disableDefaultUI: true,
                scaleControl: false,
                scrollwheel: false,
                mapTypeControl: false,
                streetViewControl: false,
                zoomControl: false,
                draggable: false,
                fullScreenControl: false,
                overviewMapControl: false,
                // tslint:disable-next-line:max-line-length
                styles: [{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#d6e2e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#cfd4d5"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#7492a8"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"lightness":25}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#dde2e3"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#cfd4d5"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#dde2e3"}]},{"featureType":"landscape.natural","elementType":"labels.text.fill","stylers":[{"color":"#7492a8"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dde2e3"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#588ca4"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"saturation":-100}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#a9de83"}]},{"featureType":"poi.park","elementType":"geometry.stroke","stylers":[{"color":"#bae6a1"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"color":"#c6e8b3"}]},{"featureType":"poi.sports_complex","elementType":"geometry.stroke","stylers":[{"color":"#bae6a1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#41626b"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"saturation":-45},{"lightness":10},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#c1d1d6"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#a6b5bb"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"color":"#9fb6bd"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"saturation":-70}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#b4cbd4"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#588ca4"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#008cb5"},{"visibility":"on"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"saturation":-100},{"lightness":-5}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#a6cbe3"}]}]
            });

            let marker      = new google.maps.Marker(),
                infowindow  = new google.maps.InfoWindow(),
                bounds      = new google.maps.LatLngBounds(),
                i;

            let cities = [
                ['Chicago', 41.8781136,-87.6297982, 4],
                ['Canada', 56.130366, -106.346771, 5],
                ['Johannesburg', -26.2041028, 28.0473051, 3],
                ['London', 51.5073509, -0.1277583, 2],
                ['Italy', 41.87194, 12.56738, 1],
                ['Moscow', 55.755826, 37.6172999, 6],
                ['Peru', -9.189967, -75.015152, 7],
                ['Egypt',26.820553, 30.802498, 8],
            ];


            for (i = 0; i < cities.length; i++) {

                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(cities[i][1], cities[i][2]),
                    map: this.map
                });

                bounds.extend(marker.position);


                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {

                        infowindow.setContent(
                            '<div class="card" style="width: 18rem; border: none;"> <div class="card-body">' +
                            '<h5 class="card-title" id="clickableItem" style="cursor: pointer;">'+ cities[i][0] +'</h5>' +
                            '</div> </div>'
                        );
                        infowindow.open(this.map, marker);

                        google.maps.event.addListener(infowindow, 'domready', () => {
                            const clickableItem = document.getElementById('clickableItem');
                            clickableItem.addEventListener('click', (  ) => {
                                const city: any =  cities[i][0];
                                const temp: any = window;
                                // temp.location.assign('#/home/dashboard');
                                temp.location = '/location/'+ city.toLowerCase();
                            });
                        });
                    };
                })(marker, i));
            }
            this.map.fitBounds(bounds);
        });
    }


}
