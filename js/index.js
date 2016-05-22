$(document).ready(function() {

  GetTwitchStream();
  

});

function GetTwitchStream() {

  var twitchApi = "https://api.twitch.tv/kraken/streams/"; // endpoint ofr twitch Api
  var twitchStreamers = ["Freecodecamp", "Mrhappy1227", "Swifty", "Kimberly_Paige", "Lynxaria", "Syrinnea", "Chainerfails", "Spsdebo", "Wildbill_69", "Realblankspace", "Datmodz", "Quin69", "Totes_MahGotes", "Tessachka","Streamerhouse","brunofin"].sort(); // List of streamers 

  twitchStreamers.forEach(function(element) {
    //console.log(element);
    $.ajax({
      dataType: "json",      
      url: twitchApi + element,
      context: element,
      success: DisplayStream
    });
  });

}

function DisplayStream(twitch) { // Builds out the links for the streamers.
  //console.log(this);
  if (twitch.stream !== null) { // determines if the streamer is currently streaming or not.
    $("#channel_list").append("<div id=" + this + " class='streamer is_up'><a role=button target='_blank' href=" + twitch.stream.channel.url + "><span class='streamer_name label label-primary'>" + this + ": is Streaming" + "</span></a></div>")
    
    $(".preview").append("<div class='col-sm-2 preview_window'><a target=_blank href=" + twitch.stream.channel.url +"><img alt=preview class='preview_img' for"+this+"stream src="+twitch.stream.preview.medium+ "></img><span class='bg-primary'>"+ twitch.stream.channel.status+"</span></a></div>");
    
  } else if(twitch.stream === null) {
    
    $("#channel_list").append("<div id=" + this + " class='streamer not_up'><a role=button target='_blank' href= http://www.twitch.tv/" + this + "/profile" + "><span class='streamer_name label label-danger'>" + this + ": is not Streaming" + "</span></a></div>")
  } else if(twitch.status == '404' || twitch.status == '422'){
     $("#channel_list").append("<div id=" + this + " class='streamer not_up'><a role=button target='_blank' href= http://www.twitch.tv/" + this + "/profile" + "><span class='streamer_name bg-danger'>" + this + ": doesn't exist" + "</span></a></div>")
    
  }


}