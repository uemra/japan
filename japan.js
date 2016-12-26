var width = 1800
var height = 1200

var map = d3.select('#content').append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g');


d3.json("japan.json",function(json){
   var projection,
         path;

   projection = d3.geoMercator()
                  .fitExtent([[0,0], [width, height]],json)

   path = d3.geoPath(projection);
   
   map.selectAll('path')
   .data(json.features)
   .enter()
   .append('path')
   .attr('d', path)
   .attr("fill", function(d){
       return "hsl(0,0%,80%)";
   })
   .attr("stroke","hsl(80,100%,0%)" )
   .on('mouseover', function(d){
       // mouseoverの時のインタラクション
   })
   .on('click', function(d) {
       // clickされた時のインタラクション
   });
})
