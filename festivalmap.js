<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="normalize.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Top 10 Electronic Music Festivals in the United States</title>
    <style>
      #map {
        height: 100%;
      }
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
		
    <script>
      var map;
      function Map() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40, lng: -98},
          zoom: 10
        });
      }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAM3lx_-uty02gVUQga-rze1vL-jdBIpiw-callback=Map"
    async defer></script>
  </body>
</html>