/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/r/aww/.json';


$(document).ready(function(){
/* FUNCTION EXECUTION HERE */
  getAww();
  console.log('Go forth and code!');


});

/* FUNCTION DEFINITION HERE */
function getAww(){
  $.ajax({
	method: "GET",
	url: frontPage,
	datatype: "json",
	success: onSuccess,
	error: onError
});
}

function onSuccess(json) {
	// console.log(json.data.children.length);
  for(i=0; i<json.data.children.length; i++){
    var title = json.data.children[i].data.title;
    var image = json.data.children[i].data.thumbnail;
    var link = json.data.children[i].data.url;
    $('#main').append(`
                      <div class="col-md-3 text-center">
                        <div class = "card">
                          <img class="card-img-top" src="${json.data.children[i].data.thumbnail}">
                            <div class="card-block">
                              <p class="float-right" >${title}</p>
                              <button type="button" class="btn btn-info"><a href="${json.data.children[i].data.url}">Read More</a></button>
                            </div>
                        </div>
                      </div>`);
  }
}

function onError(xhr, status, errorThrown) {
	alert("Sorry, there was a problem!");
	console.log("Error: " + errorThrown);
	console.log("Status: " + status);
	console.dir(xhr);
}
/* TIP: don't forget scope! */
