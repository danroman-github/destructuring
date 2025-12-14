import extractSpecialAttacks from '../js/attacs';

describe('testing function extractSpecialAttacks', () => {
    test('base case', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://example.com/icons/double-shot.png',
                    description: 'Двойной выстрел наносит двойной урон',
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://example.com/icons/knockout.png',
                    'description': 'Описание недоступно',
                },
                {
                    id: 10,
                    name: 'Огненная стрела',
                    icon: 'http://example.com/icons/fire-arrow.png',
                    'description': 'Описание недоступно',
                },
            ],
        };

        const expectedResult = [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://example.com/icons/double-shot.png',
                description: 'Двойной выстрел наносит двойной урон',
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://example.com/icons/knockout.png',
                'description': 'Описание недоступно',
            },
            {
                id: 10,
                name: 'Огненная стрела',
                icon: 'http://example.com/icons/fire-arrow.png',
                'description': 'Описание недоступно',
            },
        ];

        expect(extractSpecialAttacks(character)).toEqual(expectedResult);
    });
});