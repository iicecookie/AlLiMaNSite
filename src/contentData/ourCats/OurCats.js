export const ourCats = [
    {id: 1, name: 'Sofya', birthDate: '12.4.2020', gender: 0, litter: 'B2', litterId: 3, cattery: 'Al.Li.MaN'},


    {id: 2, name: 'Bruno', birthDate: '11.11.2021', gender: 1, litter: 'E', litterId: 2, cattery: 'Al.Li.MaN'},
    {id: 3, name: 'Perseus', birthDate: '01.10.2021', gender: 1, litter: 'W1', litterId: 1, cattery: 'Al.Li.MaN'}
];

export const ourLadies = ourCats.filter(cat => cat.gender === 0);

export const ourGentlemens = ourCats.filter(cat => cat.gender === 1);