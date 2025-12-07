import { Component } from '@angular/core';
import { input } from '@angular/core';
import {GoogleMap, MapAdvancedMarker} from '@angular/google-maps';

@Component({
  selector: 'app-map',
  imports: [GoogleMap,MapAdvancedMarker],
  templateUrl: './map.component.html'
})
export class MapComponent {

  center = input<google.maps.LatLngLiteral>({lat:0,lng:0})
  title = input<string>()
  zoom = 14;
  advancedMarkerOptions: google.maps.marker.AdvancedMarkerElementOptions = {gmpDraggable: false,title:this.title(),position:this.center()};

}
