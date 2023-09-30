var url = "https://my-json-server.typicode.com/typicode/demo/posts";

var xhr = new XMLHttpRequest();
xhr.open("DELETE", url + "/1", true);
xhr.onload = function() {
    var user = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(user);
    } else {
        console.error(user);
    }
}

xhr.send(null);