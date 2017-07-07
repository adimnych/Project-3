function newMap() {
  var center = {lat: 40, lng: -98}, // this is where my map will be centered at
    map = new google.maps.Map(document.getElementById('googleapis'),{zoom: 5, center: center});
    var festivals = [
     //This is the list of all the top ten EDM festivals in the united states
        ['Lollapalooza', 41.8828 N, 87.6189 W,'<h1 style="font-size: 22px; margin-top:0px">Lollapalooza</h1><p style="font-size: 10px">August 3-6, 2017.</p>'],
        ['Ultra Music Festival', 25.7617 N, 80.1918 W,'<h1 style="font-size: 22px; margin-top:0px">Ultra Music Festival</h1><p style="font-size: 10px">March 23-25, 2017.</p>'],
        ['Burning Man', 40.9107 N, 119.0560 W,'<h1 style="font-size: 22px; margin-top:0px">Burning Man</h1><p style="font-size: 10px">Aug 27 - Sep 4 , 2017.</p>'],
        ['Electric Daisy Carnival Las Vegas', 36.17 N, 115.134 W,'<h1 style="font-size: 22px; margin-top:0px">Electric Daisy Carnival Las Vegas</h1><p style="font-size: 10px">June 10-14, 2017.</p>'],
        ['Electric Forest', 43.5072 N, 86.3476 W,'<h1 style="font-size: 22px; margin-top:0px">Electric Forest</h1><p style="font-size: 10px">June 17-21, 2017.</p>'],
        ['Bannaroo', 41.8828 N, 87.6189 W,'<h1 style="font-size: 22px; margin-top:0px">Bannaroo</h1><p style="font-size: 10px">June 12–15., 2017.</p>'],
        ['Summerset', 45.1244 N, 92.6735 W,'<h1 style="font-size: 22px; margin-top:0px">Summerset</h1><p style="font-size: 10px">August 11-14, 2017.</p>'],
        ['Electric Zoo', 40.7932 N, 73.9213 W,'<h1 style="font-size: 22px; margin-top:0px">Electric Zoo</h1><p style="font-size: 10px">September 1-3, 2017.</p>'],
        ['Coachella', 33.6809 N, 116.2372 W,'<h1 style="font-size: 22px; margin-top:0px">Coachella</h1><p style="font-size: 10px">April 14-16, 2017.</p>'],
        ['Governor\'s Ball', 41.7932 N, 74.9213  W,'<h1 style="font-size: 22px; margin-top:0px">Governors Ball</h1><p style="font-size: 10px">June 2–4, 2017, 2017.</p>'],

    //this is what I will use for the img of each location:

    var sound = url:'images/Sound/JPG';
    
    //create an empty list
    var MarkerList = []; 

    for (var i = 0); i < festivals.length; i++){
      var festivals = festivals[i];

      var marker = new google.maps.Marker({
        position: {lat: festivals[1], lng:festivals[2]},
        map:map
        icon: sound.
        title: Resturant[0]});


      infoWindow(map, marker, festivals[9])
}

   ] 



  }




}
  
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAM3lx_-uty02gVUQga-rze1vL-jdBIpiw-callback=Map"
    async defer></script>
  </body>
</html>