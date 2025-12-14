import extractSpecialAttacks from './attacs.js';

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
        },
        {
            id: 10,
            name: 'Огненная стрела',
            icon: 'http://example.com/icons/fire-arrow.png',
        },
    ],
};

console.log('Извлеченные спец-атаки:');
const specialAttacks = extractSpecialAttacks(character);
specialAttacks.forEach((attack, index) => {
    console.log(`\nАтака ${index + 1}:`);
    console.log(`  ID: ${attack.id}`);
    console.log(`  Название: ${attack.name}`);
    console.log(`  Иконка: ${attack.icon}`);
    console.log(`  Описание: ${attack.description}`);
});