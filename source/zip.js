'use strict';

const zip = function(...args) {
	let dst = {};
	args.forEach(function(arg) {
		for (let key in arg) {
			if (!(key in dst))
				dst[key] = arg[key];
		}
	})
	return dst;
}