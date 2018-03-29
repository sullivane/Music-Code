/* Music Key/Chord Generator */

function RandomKeySignature() {
	
	var Keys = document.getElementById('KeySignature').value;
	
	var Keys = Math.floor((Math.random() * 28) + 1);
	
	switch (Keys) {
		
/* Major Keys */		
		
		case 1:
			document.getElementById("CMaj").innerHTML = "Key of C Major";
				break;
		case 2:
			document.getElementById("GMaj").innerHTML = "Key of G Major";
				break;
		case 3:
			document.getElementById("DMaj").innerHTML = "Key of D Major";
				break;
		case 4:
			document.getElementById("AMaj").innerHTML = "Key of A Major";
				break;
		case 5:
			document.getElementById("EMaj").innerHTML = "Key of E Major";
				break;
		case 6:
			document.getElementById("BMaj").innerHTML = "Key of B Major";
				break;
		case 7:
			document.getElementById("F#Maj").innerHTML = "Key of F# Major";
				break;
		case 8:
			document.getElementById("C#Maj").innerHTML = "Key of C# Major";
				break;
		case 9:
			document.getElementById("FMaj").innerHTML = "Key of F Major";
				break;
		case 10:
			document.getElementById("BbMaj").innerHTML = "Key of Bb Major";
				break;
		case 11:
			document.getElementById("EbMaj").innerHTML = "Key of Eb Major";
				break;
		case 12:
			document.getElementById("AbMaj").innerHTML = "Key of Ab Major";
				break;
		case 13:
			document.getElementById("DbMaj").innerHTML = "Key of Db Major";
				break;
		case 14:
			document.getElementById("GbMaj").innerHTML = "Key of Gb Major";
				break;
		case 15:
			document.getElementById("CbMaj").innerHTML = "Key of Cb Major";
				break;
		
/* Minor Key */
		
		case 16:
			document.getElementById("Am").innerHTML = "Key of A Minor";
				break;
		case 17:
			document.getElementById("Em").innerHTML = "Key of E Minor";
				break;
		case 18:
			document.getElementById("Bm").innerHTML = "Key of B Minor";
				break;
		case 19:
			document.getElementById("F#m").innerHTML = "Key of F# Minor";
				break;
		case 20:
			document.getElementById("C#m").innerHTML = "Key of C# Minor";
				break;
		case 21:
			document.getElementById("G#m").innerHTML = "Key of G# Minor";
				break;
		case 22:
			document.getElementById("D#m").innerHTML = "Key of D# Minor";
				break;
		case 23:
			document.getElementById("Bbm").innerHTML = "Key of Bb Minor";
				break;
		case 24:
			document.getElementById("Dm").innerHTML = "Key of D Minor";
				break;
		case 25:
			document.getElementById("Gm").innerHTML = "Key of G Minor";
				break;
		case 26:
			document.getElementById("Cm").innerHTML = "Key of C Minor";
				break;
		case 27:
			document.getElementById("Fm").innerHTML = "Key of F Minor";
				break;
		case 28:
			document.getElementById("Ebm").innerHTML = "Key of Eb Minor";
				break;
		
	}
}
/*
function RandomChords() {
	
	var Chords = document.getElementById('ChordsCode').value;
	
	var Chords = Math.floor((Math.random())
	
}



*/ 







