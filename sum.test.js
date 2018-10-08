import { res, compObj } from './sum';

describe('Should res two values', () => {
    test('a minus b, a greater than b', () => {
        expect(res(5, 2)).toBe(3)
    })

    test('Should compare two objects if they are equals', () => {
        expect(compObj).toEqual({b: 'oli', a: 3})
    })

    test('Should compare two objects and if contain an element', () => {
        expect(compObj).toHaveProperty('a', 3)
    })
})