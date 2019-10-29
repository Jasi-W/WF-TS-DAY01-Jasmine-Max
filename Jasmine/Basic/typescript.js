for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        document.querySelector("#box").innerHTML += "<p>" + i + " * " + j + " = " + i * j + "</p>";
    }
    document.querySelector("#box").innerHTML += "<hr>";
}
