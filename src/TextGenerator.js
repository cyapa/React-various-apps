export default {
	generate: function(modelText, characters) {
		/**
		  * modelText String consisting of existing example text used to generate more text.
		  * characters int telling how many characters of text to generate.
		  */
		var MAX_CONTEXT_LENGTH = 3;
		
		function sample(context, m) {
			if (context === null || context.length === 0)
				return m.substring(0, 1);
				
				var candidates = [];
				var i = m.indexOf(context);
				while (i >= 0 && i+context.length < m.length) {
					candidates.push(m.substring(i+context.length, i+context.length+1));
				i = m.indexOf(context, i + 1);
			}
			if (candidates.length > 0) {
				var ri = Math.floor(Math.random()*candidates.length);
				console.log("candadates", candidates, ri);
				return candidates[ri];
			} else {
				return null;
			}
		}
		
		if (modelText.length === 0)
			return "";
		var prod = sample(" ", modelText);
		if (prod == null) {
			prod = sample("", modelText);
			console.log("no space in model, initial character random");
		}
		console.log("initial character", prod);
		while (prod.length < characters) {
			var context = prod;
			if (context.length > MAX_CONTEXT_LENGTH)
				context = context.substring(context.length-MAX_CONTEXT_LENGTH);
			var next = sample(context, modelText);
			console.log("next", next, "for", context);
			while (next == null) {
				context = context.substring(1);
				next = sample(context, modelText);
				console.log("next", next, "for", context);
			}
			prod += next;
		} // while need more characters
		return prod;
	}
}
