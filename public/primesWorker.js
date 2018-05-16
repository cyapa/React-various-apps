let working = true;
let primes = [];
let candidate = 2;

findNext = function() {
	let prime = true;
	for (let i = 0; i < primes.length; i++) {
		if (candidate % primes[i] === 0) {
			prime = false;
			break;
		}
	}
	if (prime) {
		primes.push(candidate);
		postMessage({newPrime: candidate});
	}
	candidate += 1;
	// find the next prime, but first sleep 10 milliseconds. 
	// This timeout is for demonstration purposes, in real 
	// life you would just loop here and work as fast as possible.
	if (working)
		setTimeout(findNext, 10);
}

onmessage = (command) => {
	if (command.data === "pause") {
		working = false;
		postMessage("paused");
	}
	if (command.data === "continue") {
		if (!working) {
			working = true;
			findNext();
			postMessage("continuing");
		}
	}
}

findNext();