export const ourCats = [
    //----------
    // Girls
    //----------
    {
        id: 5, name: 'Sofya', birthDate: '20.12.2018', gender: 0, cattery: 'Silver Muar',
        description: {
            en: "Sonya, the first cat, the founder of the Al Li MaN cattery. bright emerald eyes, combined with a peach coat and a surprised muzzle, even in adulthood, make her look like a kitten. Kind, affectionate character, passed on to children.",
            ru: "Соня, первая кошка основатель питомника Al Li MaN. яркие изумрудные глаза в сочетании с персиковой шубкой и удивленной мордашкой даже во взрослом возрасте делают ее похожей на котенка. Добрый, ласковый характер, передается детям."
        }
    },
    {
        id: 4, name: 'Laima', birthDate: '20.04.2020', gender: 0, cattery: 'Afina Pallada',
        description: {
            en: "British golden shaded cat, BRI ny11. Laima, according to the documents of the house, is called Lisa. A mischievous cat with very bright green eyes. A lover of fun games. Good, affectionate purr",
            ru: "Британская золотая затушеванная кошка, BRI ny11. Laima по документам дома зовётся Лизой. Озорная кошка, с очень яркими зелеными глазаи.любительница веселых игр. Добрая, ласковая мурчунья"
        }
    },
    {
        id: 3, name: 'Ksusha', birthDate: '07.04.2020', gender: 0, cattery: 'Magic Beauty',
        description: {
            en: "British golden ticked cat, BRI ny25. The most intelligent cat, calm, kind nature, combined with a beautiful appearance and huge eyes",
            ru: "Британская золотая тиккированная кошка, BRI ny25. Самая интеллигентная кошка, спокойный, добрый характер в сочетании с красивой внешностью и огромными глазками"
        }
    },
    //----------
    // Boys
    //----------
    {
        id: 2, name: 'Bruno', birthDate: '08.04.2021', gender: 1, cattery: 'Al.Li.MaN',
        description: {
            en: "British blue gold cat. BRI ay25 \n\t Handsome Bruno was born in our cattery, litter B. \n\t A big good-natured cat with unusual aquamarine eyes and a plush fur coat.",
            ru: "Британский кот в окрасе голубое золото. BRI ay25 \n\t Красавец Бруно рожден в нашем питомнике, помет В. \n\t Большой добродушный котяра с необыкновенными аквамариновыми глазами и плюшевой шубкой."
        }
    },
    {
        id: 1, name: 'Perseus', birthDate: '01.10.2021', gender: 1, cattery: 'Lively Purr',
        description: {
            en: "British blue gold cat. BRI ay25 \n\t Handsome Bruno was born in our cattery, litter B. \n\t A big good-natured cat with unusual aquamarine eyes and a plush fur coat.",
            ru: "British golden chinchilla. BRI ny12. Peach, a cat with an unusual golden, stuffed coat and emerald eyes. A very smart and affectionate boy. Favorite pastime is to stroke the back and scratch behind the ear"
        }
    }
];

export const ourLadies = ourCats.filter(cat => cat.gender === 0);

export const ourGentlemens = ourCats.filter(cat => cat.gender === 1);