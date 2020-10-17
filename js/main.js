window.onload = function () {
	let jaargang = new Date().getFullYear();
	(jaargang > 2020) {
		document.getElementById("jaargang").innerHTML = "- " + jaargang;
	}
}
