var foods = [
    {
        "id": "0",
        "name": "Spaghetti",
        "img": "./img/pic1.jpg",
        "description": "Garnieren Sie die Spagetti Bolognese mit frischem Parmesan und grünem Salat.",
        "contains": "Noodles, Bolognese",
        "level": "2",
        "comment": ""
    },
    {
        "id": "1",
        "name": "Carbonara",
        "img": "./img/pic1.jpg",
        "description": "Garnieren Sie die Spagetti Bolognese mit frischem Parmesan und grünem Salat.",
        "contains": "Noodles, Bolognese",
        "level": "4",
        "comment": ""
    },
    {
        "id": "2",
        "name": "Tortellini",
        "img": "./img/pic1.jpg",
        "description": "Garnieren Sie die Spagetti Bolognese mit frischem Parmesan und grünem Salat.",
        "contains": "Noodles, Bolognese",
        "level": "1",
        "comment": ""
    }
];
function ranking(food) {
    var rankingStars = "";
    for (var i = 1; i <= 5; i++) {
        if (food.level >= i) {
            rankingStars += "<span class=\"fa fa-star checked\"></span>";
        }
        else {
            rankingStars += "<span class=\"fa fa-star\"></span>";
        }
    }
    return rankingStars;
}
function hearts(food) {
    var rankingHearts = "";
    for (var i = 1; i <= 5; i++) {
        if (food.level >= i) {
            rankingHearts += "<i class=\"fa fa-heart heart\"></i>";
        }
        else {
            rankingHearts += "<i class=\"fa fa-heart\"></i>";
        }
    }
    return rankingHearts;
}
foods.forEach(function (food) {
    document.querySelector("#box").innerHTML += "\n\t<div class=\"card m-3\">\n\t\t<img src=\"" + food.img + "\" class=\"card-img-top\">\n\t\t<div class=\"card-body\">\n\t\t\t<h5 class=\"card-title\">" + food.name + "</h5>\n\t\t\t<p class=\"card-text\">" + food.description + "</p>\n\t\t</div>\n\t\t\n\t\t<div class=\"card-footer\">\n\t\t\t<p class=\"card-text text-center\">" + ranking(food) + "</p>\n\t\t</div>\n\t\t\n\t\t<div class=\"card-footer\">\n\t\t\t<p class=\"card-text text-center\">" + hearts(food) + "</p>\n\t\t</div>\n\t\t\n\t\t<div class=\"card-body text-center\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\"  id=\"" + food.id + "\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n\t\t\t\tadd Commit\n\t\t\t</button>\n\t\t</div>\n\t</div>";
});
document.querySelector("#box").addEventListener("click", modalBox);
function modalBox(e) {
    var i = e.target.id;
    console.log(i);
    console.log(foods[i].name);
    document.querySelector("#modal").innerHTML = "\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">" + foods[i].name + "</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\t  \n      <div class=\"modal-body\">\n        <img src=\"" + foods[i].img + "\" width=\"100%\">\n      </div>\n\t  \n      <div class=\"modal-body\">\n        <p>Commit</p>\n\t\t\n\t\t\n      </div>\n\t  \n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n\t  \n    </div>\n  </div>\n</div>";
}
function addCommit() {
}
