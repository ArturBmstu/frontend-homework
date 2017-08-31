'use strict';

const zip = (...args) => args.reduce(function(dst, arg) {
		for (let key in arg) {
			if (!(key in dst))
				dst[key] = arg[key];
		}
		return dst;
	})