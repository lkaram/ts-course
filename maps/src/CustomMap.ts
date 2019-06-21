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
}
