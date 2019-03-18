if (location.href.indexOf("instagram.com") == -1) {
	console.log("Find another popular profile.")
} else if (parseInt(document.getElementsByClassName("g47SY")[1].title.split(" ").join("").split(",").join("")) < 1000000) {
	console.log("Not enough subscribers. Find someone who has more than 1000000 followers.")
} else {
	time = prompt("Set the interval", "");
	a = document.getElementsByClassName("_6VtSN");

	function boostFollowers() {
		a[0].click();
		b = document.getElementsByClassName("-Cab_");
		if (b.length > 0) {
			b[0].click();
		}
	}

	setInterval(boostFollowers, time * 1000);
	console.log("Script is started");
	console.log("Interval is " + time + " sec.");
}