const handleTuple = ([conditional, yeap, nope]) => (conditional ? yeap : nope);

const handleString = c => c;

const reducer = (acc, item) =>
  [acc, Array.isArray(item) ? handleTuple(item) : handleString(item)]
    .join(" ")
    .trim();

const handler = (...cases) => cases.reduce(reducer, undefined);

export default handler;
