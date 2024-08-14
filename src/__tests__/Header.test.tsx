// myFunction.test.js
import add from "../components/header/Header";

import '@testing-library/jest-dom'

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});