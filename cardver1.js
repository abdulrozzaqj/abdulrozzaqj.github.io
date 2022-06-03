//membuat variabel//
// var jumlahcard = 4;
// var comp = Math.ceil(Math.random() * jumlahcard);
// var hcomp = 300;
// var hplayer = 300;

// var dtentara = 10;
// var dpesawat = 25;
// var dtank = 35;
// var dmeriam = 15;
// var dmisil = 50;

// if (comp > 4) {
// 	comp % 4;
// }

// if (comp == 0) {
// 	comp = "Tentara";
// } else if (comp == 1) {
// 	comp = "pesawat";
// } else if (comp == 2) {
// 	comp = "tank";
// } else if (comp == 3) {
// 	comp = "meriam";
// } else {
// 	comp = "misil";
// }

// alert(comp);

// console.log(comp);

//membuat fungsi//

var pilihan = document.querySelectorAll('div span');
pilihan.forEach(function(pil) {
	pil.addEventListener('click', function() {
		// var dtentara = 10;
		// var dpesawat = 25;
		// var dtank = 35;
		// var dmeriam = 15;
		// var dmisil = 50;
		// var nilaiplayer = 0;
		// var nilaicomp = 0;
		// var hasil = '';
		// var jumlahcard = 4;
		// var comp = Math.ceil(Math.random() * jumlahcard);
		// if (comp > 4) {
		// 	comp % 4;
		// }
		
		// if (comp == 0) {
		// 	comp = "Tentara"; nilaicomp = dtentara;
		// } else if (comp == 1) {
		// 	comp = "pesawat"; nilaicomp = dpesawat
		// } else if (comp == 2) {
		// 	comp = "tank"; nilaicomp = dtank;
		// } else if (comp == 3) {
		// 	comp = "meriam"; nilaicomp = dmeriam;
		// } else {
		// 	comp = "misil"; nilaicomp = dmisil;
		// }
		// var pilihanplayer = pil.className;

		// if (pil == "tentara") {
		// 	nilaiplayer = dtentara;
		// } else if (pil == "pesawat") {
		// 	nilaiplayer = dpesawat
		// } else if (pil == "tank") {
		// 	nilaiplayer = dtank;
		// } else if (pil == "meriam") {
		// 	nilaiplayer = dmeriam;
		// } else {
		// 	nilaiplayer = dmisil;
		// }

		// if (nilaiplayer = nilaicomp) return "anda seri";
		// if (nilaiplayer < nilaicomp) return "anda kalah";
		// return "Anda menang"

		// console.log('power komputer :' + nilaicomp + ', pilihan computer :' + comp);
		// alert('pilihan komputer :' + comp + ', pilihan player :' + pilihanplayer + ', hasilnya :' + hasil());
		console.log(pil);
	})
	// console.log(pil);
})
// console.log(pilihan);

//membuat peraturan hasil//

// function keputusan(comp, player) {
	// var dtentara = 10;
	// var dpesawat = 25;
	// var dtank = 35;
	// var dmeriam = 15;
	// var dmisil = 50;
	// var nilaicomp = 0;
	// var nilaiplayer = 0;
// 	if (comp = "Tentara") {
// 		nilaicomp = dtentara;
// 	} else if (comp = "pesawat") {
// 		nilaicomp = dpesawat;
// 	} else if (comp = "tank") {
// 		nilaicomp = dtank;
// 	} else if (comp = "meriam") {
// 		nilaicomp = dmeriam;
// 	} else {
// 		nilaicomp = dmisil;
// 	}

// 	if (player == "Tentara") return nilaiplayer = dtentara;
// 	if (player == "pesawat") return nilaiplayer = dpesawat;
// 	if (player == "tank") return nilaiplayer = dtank;
// 	if (player == "meriam") return nilaiplayer = dmeriam;
// 	return nilaiplayer = dmisil;
// }
function hasil(nilaicomp, nilaiplayer) {
	if (nilaiplayer = nilaicomp) return "seri";
	if (nilaiPlayer < nilaicomp) return "Anda kalah";
	return "Anda menang";

	alert("damage komputer :" + nilaicomp + ", damage player :" + nilaiplayer);
}

// var ptentara = document.querySelector('.tentara');
// function piltentara() {
// 	// alert("player memilih tentara");
// 	var jumlahcard = 4;
// 	var comp = Math.ceil(Math.random() * jumlahcard);
// 	if (comp > 4) {
// 		comp % 4;
// 	}

// 	if (comp == 0) {
// 		comp = "Tentara";
// 	} else if (comp == 1) {
// 		comp = "pesawat";
// 	} else if (comp == 2) {
// 		comp = "tank";
// 	} else if (comp == 3) {
// 		comp = "meriam";
// 	} else {
// 		comp = "misil";
// 	}
// 	var pilihanplayer = ptentara.className;
// 	console.log('pilihan komputer :' + comp + ', pilihan player :' + pilihanplayer);
// }
// ptentara.onclick = piltentara;
// var ppesawat = document.querySelector('.pesawat');
// function pilpesawat() {
// 	var jumlahcard = 4;
// 	var comp = Math.ceil(Math.random() * jumlahcard);
// 	if (comp > 4) {
// 		comp % 4;
// 	}

// 	if (comp == 0) {
// 		comp = "Tentara";
// 	} else if (comp == 1) {
// 		comp = "pesawat";
// 	} else if (comp == 2) {
// 		comp = "tank";
// 	} else if (comp == 3) {
// 		comp = "meriam";
// 	} else {
// 		comp = "misil";
// 	}
// 	var pilihanplayer = ppesawat.className;
// 	console.log('pilihan komputer :' + comp + ', pilihan player :' + pilihanplayer);
// }
// ppesawat.onclick = pilpesawat;
// var ptank = document.querySelector('.tank');
// function piltank() {
// 	var jumlahcard = 4;
// 	var comp = Math.ceil(Math.random() * jumlahcard);
// 	if (comp > 4) {
// 		comp % 4;
// 	}

// 	if (comp == 0) {
// 		comp = "Tentara";
// 	} else if (comp == 1) {
// 		comp = "pesawat";
// 	} else if (comp == 2) {
// 		comp = "tank";
// 	} else if (comp == 3) {
// 		comp = "meriam";
// 	} else {
// 		comp = "misil";
// 	}
// 	var pilihanplayer = ptank.className;
// 	console.log('pilihan komputer :' + comp + ', pilihan player :' + pilihanplayer);
// }
// ptank.onclick = piltank;
// var pmeriam = document.querySelector('.meriam');
// function pilmeriam() {
// 		var jumlahcard = 4;
// 	var comp = Math.ceil(Math.random() * jumlahcard);
// 	if (comp > 4) {
// 		comp % 4;
// 	}

// 	if (comp == 0) {
// 		comp = "Tentara";
// 	} else if (comp == 1) {
// 		comp = "pesawat";
// 	} else if (comp == 2) {
// 		comp = "tank";
// 	} else if (comp == 3) {
// 		comp = "meriam";
// 	} else {
// 		comp = "misil";
// 	}
// 	var pilihanplayer = pmeriam.className;
// 	console.log('pilihan komputer :' + comp + ', pilihan player :' + pilihanplayer);
// }
// pmeriam.onclick = pilmeriam;
// var pmisil = document.querySelector('.misil');
// function pilmisil() {
// 	var jumlahcard = 4;
// 	var comp = Math.ceil(Math.random() * jumlahcard);
// 	if (comp > 4) {
// 		comp % 4;
// 	}

// 	if (comp == 0) {
// 		comp = "Tentara";
// 	} else if (comp == 1) {
// 		comp = "pesawat";
// 	} else if (comp == 2) {
// 		comp = "tank";
// 	} else if (comp == 3) {
// 		comp = "meriam";
// 	} else {
// 		comp = "misil";
// 	}
// 	var pilihanplayer = pmisil.className;
// 	console.log('pilihan komputer :' + comp + ', pilihan player :' + pilihanplayer);
// }
// pmisil.onclick = pilmisil;

// function gethasil(comp, player) {
// 	if (comp == 0) return "Tentara";
// 	if (comp == 1) return "pesawat";
// 	if (comp == 2) return "tank";
// 	if (comp == 3) return "meriam";
// 	return "misil";
// }