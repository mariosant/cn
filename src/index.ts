type Tuple = [boolean, string, string];

const handleTuple = ([conditional, yeap, nope]: Tuple) =>
	conditional ? yeap : nope;

const handleString = (c: string) => c;

const reducer = (acc: string, item: Tuple | string) =>
	[acc, Array.isArray(item) ? handleTuple(item) : handleString(item)]
		.join(' ')
		.trim();

const handler = (...cases: (Tuple | string)[]) => cases.reduce(reducer, '');

export default handler;
