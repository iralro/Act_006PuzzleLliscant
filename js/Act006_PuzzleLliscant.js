let puzzle = new Array(
	new Array(1,2,3),
	new Array(4,' ', 6),
	new Array(7,5,6)
);


let puzzleCorrecte = new Array(
	new Array(1,2,3),
	new Array(4,5,6),
	new Array(7,8,6)
);

let cos = document.getElementById("cos");
let taula = document.getElementById("taula");

let fila, cella;

for	(let i =0; i<3; i++) {
	fila = taula.insertRow();
} for	(let j= 0; j<3; j++) {
	cella = taula.insertCell();
	// document.getElementById("taula");
//cella.onclick=function(){canvia(0,2)};
cella.id = "c" + i + j ;
cella.innerHTML=i + "," + j;


function canvia(celaFila, celaColumna) {
	alert("Has trepitjat sobre la cel·la" + celaFila + "," + celaColumna);
}

}
