import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additional class', () => {
        expect(classNames('class', {}, ['class1'])).toBe('class class1');
    });

    test('with mods', () => {
        expect(classNames('class', { hovered: true }, ['class1'])).toBe('class class1 hovered');
    });

    test('with mods false', () => {
        expect(classNames('class', { hovered: true, scrollable: false }, ['class1'])).toBe('class class1 hovered');
    });

    test('with mods undefined', () => {
        expect(classNames('class', { hovered: true, scrollable: undefined }, ['class1'])).toBe('class class1 hovered');
    });
});
