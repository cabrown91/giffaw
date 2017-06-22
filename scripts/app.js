$(document).on("ready", function(){

  renderGifs();

  $("form").on("submit", function(e) {
    e.preventDefault();

    renderGifs();
  });
});

function renderGifs() {
  $.ajax({
    method: "GET",
    url: "http://api.giphy.com/v1/gifs/search",
    data: $("form").serialize(),
    success: onSuccess,
    error: onError
  });
}

  function onSuccess(json) {
    console.log(json);
    for(var i=0; i<json.data.length; i++) {
      $(".gif-gallery").prepend("<img src="+json.data[i].images.fixed_height.url+">");
    }
  }

  function onError(xhr, status, errorThrown) {
    alert("Sorry, there was a problem");
    console.log("Error:" + errorThrown);
    console.log("Status:" + status);
  }
