$("#search").on("click", function(event) {
    
  
    event.preventDefault();

    // Here we grab the text from the input box
    var search = "q=" + $("#searchterm").val();
    var num = $("#numrecords").val();
    var begin = "begin_date=" + $('#startdate').val();
    var end = "&end_date=" + $('#enddate').val() + "&";
    var apikey = "&api-key=bCVO0OYnbKZxdJ0tuL2yMDEIy7H5yvhM"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + begin + end + search + apikey;

    $.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
console.log('response:', response)

for (var i = 0; i < num; i++) {
    var abstract = response.response.docs[i].abstract
    var p = $("<p>").text(abstract)
    var list = $("#ablist");
    list.prepend(p)
    var a = $('<a>'+ "Source" +'</a>')
    a.attr("href", response.response.docs[i].web_url)
    
    list.prepend(a)

}


});

  });

  $("#clear").on("click", function(event) {
   
    $('#ablist').empty()
    console.log(event)
  });

  
  //begin_date=20120101&end_date=20140201