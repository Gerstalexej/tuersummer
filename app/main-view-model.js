var Observable = require("data/observable").Observable;

function getMessage(counter) {
    /*if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }*/


}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();

     xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      console.log(this.responseText);
    }
  };


    console.log('Making request...');
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}


function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function() {
        //this.counter--;
        //this.set("message", getMessage(this.counter));
        //this.style.ba
        //page.css = "button { background-image: url(\"res://walnuss_offen\") }";

        this.set("message", httpGet('http://gerstalexej.ddns.net:301/ON'));
        //this.set("message", httpGet('http://quonux.com'));
    }

    return viewModel;
}

exports.createViewModel = createViewModel;