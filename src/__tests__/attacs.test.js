import extractSpecialAttacks from '../js/attacs.js';

describe('extractSpecialAttacks function', () => {
    test('extractSpecialAttacks returns correct fields', () => {
        const char = {
            name: 'Лучник',
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...'
                }
            ]
        };

        const extracted = extractSpecialAttacks(char);

        expect(extracted.length).toBe(2);
        expect(extracted[0].id).toBe(8);
        expect(extracted[0].name).toBe('Двойной выстрел');
        expect(extracted[0].icon).toBe('http://...');
        expect(extracted[0].description).toBe('Двойной выстрел наносит двойной урон');

        expect(extracted[1].id).toBe(9);
        expect(extracted[1].name).toBe('Нокаутирующий удар');
        expect(extracted[1].icon).toBe('http://...');
        expect(extracted[1].description).toBe('Описание недоступно');
    });

    test('extractSpecialAttacks handles missing data gracefully', () => {
        const charWithNoData = {
            special: []
        };

        const extractedEmpty = extractSpecialAttacks(charWithNoData);

        expect(extractedEmpty.length).toBe(0);
    });

    test('extractSpecialAttacks only extracts needed fields', () => {
        const charComplex = {
            name: 'Маг',
            special: [
                {
                    id: 10,
                    name: 'Огненная стена',
                    icon: 'http://wall',
                    damageType: 'fire',
                    range: 50
                }
            ]
        };

        const extractedComplex = extractSpecialAttacks(charComplex);

        expect(Object.keys(extractedComplex[0])).toContain('id');
        expect(Object.keys(extractedComplex[0])).toContain('name');
        expect(Object.keys(extractedComplex[0])).toContain('icon');
        expect(Object.keys(extractedComplex[0])).toContain('description');
        expect(Object.keys(extractedComplex[0]).length).toBe(4);
    });
});