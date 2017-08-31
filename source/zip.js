'use strict';

const zip = (...args) => args.reduce(
	(dst, arg) =>  ({...arg, ...dst})
);