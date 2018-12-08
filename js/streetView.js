streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView

    function inicializar () {
      cargarPanorama(mapa.getCenter());
      fijarStreetView(mapa.getCenter());
    };

    function cargarPanorama(posicion){
      panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: posicion,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
    };

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
        mapa.addListener('click',function(e){
        mapa.panTo(e.latLng);// mueve a esa direccion
        cargarPanorama(e.latLng);
      });
  };


  return {
    inicializar,
    fijarStreetView
  }
})()
