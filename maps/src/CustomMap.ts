export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;

  color: string;
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divMap: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divMap), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener("click", () => {
      const info = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      info.open(this.googleMap, marker);
    });
  }
}
