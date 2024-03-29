var d3 = require('d3');
var topojson = require('topojson');

// initialize colors
var red = "#EC1C24";//"#BE3434";//"#D91E36";//"#A41A1A";//"#8A0000";//"#F04646";
var blue = "#2176AE";//"#265B9B";//"#194E8E";//"#315A8C";//"#004366";//"#62A9CC";
var yellow = "#FFCC32";//"#6790B7";//"#EB8F6A";//"#FFFF65";//"#FFCC32";

var timer60minutes = 3600000;

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

// helpful functions:
var formatthousands = d3.format("0,000");

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

// function for tooltip
function tooltip_function(leans,properties) {
  var html_str = "<div class='state-name'>"+properties.name+"</div><div class='result'>"+leans.Cook+"</div>";
  return html_str;
}

// function for shading colors
function shadeColor2(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

// function for coloring map
function color_Cook(lean){
  if (lean == "Solid Republican"){
    return red;//"#EF3E36";
  } else if (lean == "Solid Democratic"){
    return blue;//"#2176AE";
  } else if (lean == "Likely Republican"){
    return shadeColor2(red,0.25);//"#FF934F";
  } else if (lean == "Likely Democratic"){
    return shadeColor2(blue,0.25);//"#57B8FF";
  } else if (lean == "Toss-Up Republican"){
    return "#BF4A8E";
  } else if (lean == "Toss-Up Democratic"){
    return "#674ABF";
  } else if (lean == "Lean Republican"){
    return shadeColor2(red,0.50);//"#FFC682";
  } else if (lean == "Lean Democratic"){
    return shadeColor2(blue,0.50);//"#8AEBFF";
  } else {
    console.log("ERROR");
    return "#FFFFFF";
  }
}

// -----------------------------------------------------------------------------
// STATE MAP ------------------------------------------------------------
// -----------------------------------------------------------------------------

// var houseCAURL = "https://extras.sfgate.com/editorial/election2016/live/emma_house_district_ca.json";

var catimer_races;
var active_map = "./assets/maps/ca_house_insets.json";

// important elements
var inner_tooltip = d3.select("#inner-tooltip");
var tooltip = document.getElementById("tooltip");
var d3tooltip = d3.select("#tooltip");
var map_body = document.getElementById("map-container-state");

d3.json("https://extras.sfgate.com/editorial/election2018primary/cook_report_house.json", function(error,HouseData){

  var path = d3.geo.path()
    .projection(null);

  function camap_insets_function() {

    d3.select("#map-container-state").select("svg").remove();
    d3.select("#map-container-state").select(".svg-container").remove();
    d3.select("#map-container-state").select(".label-LA").remove();
    d3.select("#map-container-state").select(".label-SF").remove();

    // CA map by county
    var svgCACounties = d3.select("#map-container-state")
      .append("div")
      .classed("svg-container", true) //container class to make it responsive
      .attr("id","map-container-state")
      .append("svg")
      //responsive SVG needs these 2 attributes and no width and height attr
      .attr("preserveAspectRatio", "xMinYMin slice")
      .attr("viewBox", "50 0 860 530")
      //class to make it responsive
      .classed("svg-content-responsive", true);

    d3.json(active_map, function(error, us) {
      if (error) throw error;

      var features = topojson.feature(us,us.objects.features).features;
      svgCACounties.selectAll(".states")
      .data(topojson.feature(us, us.objects.features).features).enter()
      .append("path")
      .attr("class", "states")
      .attr("d",path)
      .style("fill", function(d) {
        if (HouseData[d.id]) {
          return color_Cook(HouseData[d.id].Cook);
        } else {
          return "white";//fill(path.area(d));
        }
      })
      .attr("d", path)
      .on('mouseover', function(d,index) {
        if (d.id != 0) {
          var html_str = tooltip_function(HouseData[d.id],d.properties);
          inner_tooltip.html(html_str);
          tooltip.classList.remove("hidden");
        }
      })
      .on('click', function(d,index) {
        if (d.id != 0) {
          var html_str = tooltip_function(HouseData[d.id],d.properties);
          inner_tooltip.html(html_str);
          tooltip.classList.remove("hidden");
          map_body.classList.add("noclick");
        }
      })
      .on("mousemove", function() {
        // this is me being very clever
        // "offsetLeft" is the position of the mouse relative to the container div, aka "map-container-state"
        // "containerSize" is the size of the container div
        // the division is supposed to tell you if the mouse is on the right half or the left so you can flip the tooltip if needed
        var offsetLeft = d3.event.pageX - (document.getElementById("map-container-state").getBoundingClientRect().left + document.body.scrollLeft);
        var containerSize = document.getElementById("map-container-state").offsetWidth
        if (offsetLeft/containerSize > 0.5){
          return d3tooltip
            .style("top",(d3.event.pageY+10)+"px")//(d3.event.pageY+40)+"px")
            .style("left",((d3.event.pageX)-120)+"px");
        } else {
          return d3tooltip
            .style("top",(d3.event.pageY+10)+"px")//(d3.event.pageY+40)+"px")
            .style("left",((d3.event.pageX)+10)+"px");
        }
      })
      .on("mouseout", function(){
        // only mouseout on desktop
        if (screen.width >= 480){
          map_body.classList.remove("noclick");
          tooltip.classList.add("hidden");
        };
      });

    });

    // add layer with labels
    var labelLA = d3.select("#map-container-state")
      .append("div")
      .attr("class","label-LA")
      .style("position", "absolute")
      .style("z-index", "5")
      .text("Los Angeles")

    var labelBA = d3.select("#map-container-state")
      .append("div")
      .attr("class","label-SF")
      .style("position", "absolute")
      .style("z-index", "5")
      .text("Bay Area")

  };

  camap_insets_function();
  catimer_races = setInterval(function() {
    camap_insets_function();
    console.log("refresh ca insets map");
  }, timer60minutes);

});

// close tooltip for mobile
document.getElementById("close-tooltip").addEventListener("click",function(){
  tooltip.classList.add("hidden");
  map_body.classList.remove("noclick");
});
