
let foods = [
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
	let rankingStars = "";
	
	for(let i=1; i<=5; i++) {
		if(food.level >= i){
			rankingStars += `<span class="fa fa-star checked"></span>`;
		} else {
			rankingStars += `<span class="fa fa-star"></span>`;
		}
	}
	return rankingStars;
}

function hearts(food) {
	let rankingHearts = "";
	
	for(let i=1; i<=5; i++) {
		if(food.level >= i) {
			rankingHearts += `<i class="fa fa-heart heart"></i>`;
		}

		else {
			rankingHearts += `<i class="fa fa-heart"></i>`;
		}
	}
	return rankingHearts;
}

foods.forEach(function(food) {
	document.querySelector("#box").innerHTML += `
	<div class="card m-3">
		<img src="${food.img}" class="card-img-top">
		<div class="card-body">
			<h5 class="card-title">${food.name}</h5>
			<p class="card-text">${food.description}</p>
		</div>
		
		<div class="card-footer">
			<p class="card-text text-center">${ranking(food)}</p>
		</div>
		
		<div class="card-footer">
			<p class="card-text text-center">${hearts(food)}</p>
		</div>
		
		<div class="card-body text-center">
			<button type="button" class="btn btn-primary"  id="${food.id}" data-toggle="modal" data-target="#exampleModalCenter">
				add Commit
			</button>
		</div>
	</div>`;
});

document.querySelector("#box").addEventListener("click", modalBox);

function modalBox(e) {
	var i = e.target.id;
	console.log(i);
	console.log(foods[i].name);
	
	
	document.querySelector("#modal").innerHTML = `

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">${foods[i].name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
	  
      <div class="modal-body">
        <img src="${foods[i].img}" width="100%">
      </div>
	  
      <div class="modal-body">
        <p>Commit</p>
		
		
      </div>
	  
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
	  
    </div>
  </div>
</div>`;
}


function addCommit() {
	
}
