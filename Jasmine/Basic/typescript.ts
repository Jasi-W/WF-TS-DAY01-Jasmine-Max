

for(let i: number=1; i<=10; i++) {
	for(let j: number=1; j<=10; j++) {
		document.querySelector("#box").innerHTML += `<p>${i} * ${j} = ${i*j}</p>`;
	}
	document.querySelector("#box").innerHTML += `<hr>`;
}
