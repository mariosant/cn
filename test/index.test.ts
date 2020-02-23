import cn from '../src';

test('outputs single class', () => {
	expect(cn('test')).toEqual('test');
});

test('outputs multiple classes', () => {
	expect(cn('test', 'work')).toEqual('test work');
});

test('works with simple conditions', () => {
	expect(cn([true, 'works'])).toEqual('works');
	expect(cn([false, 'works'])).toEqual('');
});

test('works with conditions', () => {
	expect(cn([true, 'works', 'does not work'])).toEqual('works');
	expect(cn([false, 'works', 'does not work'])).toEqual('does not work');
});

test('deduplicates class names', () => {
	expect(cn('btn', 'btn', 'btn')).toEqual('btn');
	expect(cn('btn', 'active', 'btn', 'btn')).toEqual('btn active');
});

test('a mixed example', () => {
	expect(cn('a', 'b', [true, 'works', 'does not work'])).toEqual('a b works');
});
