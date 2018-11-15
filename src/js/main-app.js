import '../scss/main.scss';


// //Width and height of map
// var width = 960;
// var height = 500;
//
// // D3 Projection
// var projection = d3.geo.albersUsa()
// 				   .translate([width/2, height/2])    // translate to center of screen
// 				   .scale([1000]);          // scale things down so see entire US
//
// // Define path generator
// var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
// 		  	 .projection(projection);  // tell path generator to use albersUsa projection
//
//
// // Define linear scale for output
// var color = d3.scale.linear()
// 			  .range(["rgb(213,222,217)","rgb(69,173,168)","rgb(84,36,55)","rgb(217,91,67)"]);
//
//
// //Create SVG element and append map to the SVG
// var svg = d3.select("body")
// 			.append("svg")
// 			.attr("width", width)
// 			.attr("height", height);
//
// // Append Div for tooltip to SVG
// var div = d3.select("body")
// 		    .append("div")
//     		.attr("class", "tooltip")
//     		.style("opacity", 0);
//
// // Load in my states data!
// d3.csv("stateslived.csv", function(data) {
// color.domain([0,1,2,3]); // setting the range of the input data
//
// // Load GeoJSON data and merge with states data
// d3.json("Nevada.json", function(json) {
//
// // Loop through each state data value in the .csv file
// // for (var i = 0; i < data.length; i++) {
// //
// // 	// Grab State Name
// // 	var dataState = data[i].state;
// //
// // 	// Grab data value
// // 	var dataValue = data[i].visited;
// //
// // 	// Find the corresponding state inside the GeoJSON
// // 	for (var j = 0; j < json.features.length; j++)  {
// // 		var jsonState = json.features[j].properties.name;
// //
// // 		if (dataState == jsonState) {
// //
// // 		// Copy the data value into the JSON
// // 		json.features[j].properties.visited = dataValue;
// //
// // 		// Stop looking through the JSON
// // 		break;
// // 		}
// // 	}
// // }
//
// // Bind the data to the SVG and create one path per GeoJSON feature
// svg.selectAll("path")
// 	.data(json.features)
// 	.enter()
// 	.append("path")
// 	.attr("d", path)
// 	.style("stroke", "#fff")
// 	.style("stroke-width", "1")
// 	.style("fill", function(d) {
//
// 	// Get data value
// 	var value = d.properties.visited;
//
// 	if (value) {
// 	//If value exists…
// 	return color(value);
// 	} else {
// 	//If value is undefined…
// 	return "rgb(213,222,217)";
// 	}
// });
//
//
//
// 	});
//
// });





jwplayer('demo').setup({
  playlist: "https://cdn.jwplayer.com/v2/playlists/xt6JHlTI",
  // displaytitle: true,
  // width: '480',
  // height: '270'
});

// jwplayer('listbarcontent').setup({
//   playlist: "https://cdn.jwplayer.com/v2/playlists/xt6JHlTI",
// });


// jwplayer().on('ready',function(){
//   var myVideos = jwplayer().getPlaylist();
//   for (var i = 0; i < myVideos.length; i++) {
//     //put the code to get your rating here
//     document.getElementById('stick').innerHTML += '<li id=video'+ i +' onClick="jwplayer().playlistItem(' + i + ');jwplayer().play(true);"><a href="#"><img class="playlistImg" src=' + myVideos[i].image + ' data-large='+ myVideos[i].image +' data-description="' + myVideos[i].description + '"></a></li>';
//   }
// });


// jwplayer().on('ready',function(){
//   var myVideos = jwplayer().getPlaylist();
//   for (var i = 0; i < myVideos.length; i++) {
//     //put the code to get your rating here
//     document.getElementById('listbarcontent').innerHTML += '<div class=playlist_item id=video'+ i +' onClick="jwplayer().playlistItem(' + i + ');jwplayer().play(true);"><img class="playlistImg" src=' + myVideos[i].image + '><div class="playlistText"><div class="playlistHead">' + myVideos[i].title + '</div>' + myVideos[i].description + '</div></div>';
//   }
// });

jwplayer().on('ready',function(){
  var myVideos = jwplayer().getPlaylist();
  for (var i = 0; i < myVideos.length; i++) {
    //put the code to get your rating here
    document.getElementById('carousel').innerHTML += '<div class=playlist_item id=video'+ i +' onClick="jwplayer().playlistItem(' + i + ');jwplayer().play(true);"><img class="playlistImg" src=' + myVideos[i].image + '><div class="playlistText"><div class="playlistHead">' + myVideos[i].title + '</div></div></div>';
  }


	var myVideosWidth = myVideos.length * 150;


	$( ".arrow" ).click(function() {

		if ($( this ).hasClass( "arrowright" )) {


    // var far = $( '#carousel' ).width();
		var far = myVideosWidth / 2 ;
    var pos = $('#carousel').scrollLeft() + far;
    $('#carousel').animate( { scrollLeft: pos }, 1000, 'easeOutQuad' );

		} else {

			var far = myVideosWidth;
			var pos = $('#carousel').scrollLeft() + far;
	    $('#carousel').animate( { scrollLeft: 0 }, 1000, 'easeOutQuad' );

		}

	});

});
