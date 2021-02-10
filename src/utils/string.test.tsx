import isScramble from './string';

test('word a contains letters a', () => {
    expect(isScramble('a', 'a')).toBe(true);
});

test('a does NOT contain letters b', () => {
    expect(isScramble('a', 'b')).toBe(false);
});

test('multiple same letters in a word', () => {
    expect(isScramble('buz', 'buzz')).toBe(false);
});

test('typical usage', () => {
    expect(isScramble('rtfbauhndkoahmsldcuraguydgztyvadyvw', 'world')).toBe(true);
});

test('pass empty string', () => {
    expect(isScramble('a', '')).toBe(false);
});