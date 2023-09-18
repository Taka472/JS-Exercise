var url = "https://my-json-server.typicode.com/typicode/demo/posts";
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url + "/2", true);
xhr.setRequestHeader("Conten-type", "application/json;charset=utf-8");
xhr.onload = function() {
    var user = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}

xhr.send(json);