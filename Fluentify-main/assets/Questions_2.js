export default [
    {
        question: 'Один хліб, два хліби',
        id: 'q2',
        type: 'Fill_the_blank_only_question',
        parts: [
            {
                text: 'One',
                isBlank: true,
            },
            {
                text: 'bread',
                isBlank: true,
            },
            {
                text: 'Two',
                isBlank: true,
            },
            {
                text: 'breads',
                isBlank: true,
            },
        ],
        options: ['One', 'bread', 'Two', 'breads', 'four', 'a lot'],
    },
    {
        id: 'q1',
        type: 'Fill_the_blank_multiple_question',
        parts: [
            {
                text: 'One',
                isBlank: true,
            },
            {
                text: 'bread',
            },
            {
                text: 'Two',
                isBlank: true,
            },
            {
                text: 'breads',
            },
        ],
        options: ['One', 'Two', 'Three', 'Quatro'],
    },
    {
        id: 'q0',
        type: 'Fill_the_blank_question',
        text_Pre: 'One bread, two ',
        text_Post: '',
        image: 'https://i.imgur.com/vrW4Alv.png',
        options: ['three', 'bread', 'breads', 'salt', 'four'],
        correct: 'breads',
    },
    {
        question: 'Що з цього "Склянка 2"?',
        type: 'Image_Multiple_Choice_Question',
        options: [
            {
                id: 'option_1',
                image: 'https://i.imgur.com/vp4uDc1.png',
                text: 'Glass',
                correct: true,
            },
            {
                id: 'option_2',
                image: 'https://i.imgur.com/tKfNgHj.png',
                text: 'Apple',
            },
            {
                id: 'option_3',
                image: 'https://i.imgur.com/hGpYHWz.png',
                text: 'Banana',
            },
            {
                id: 'option_4',
                image: 'https://i.imgur.com/OVjJlZM.png',
                text: 'Bottle',
            },
        ],
    },
    {
        question: 'Що з цього "Банан"?',
        type: 'Image_Multiple_Choice_Question',
        options: [
            {
                id: 'option_4',
                image: 'https://i.imgur.com/OVjJlZM.png',
                text: 'Bottle',
            },
            {
                id: 'option_2',
                image: 'https://i.imgur.com/tKfNgHj.png',
                text: 'Apple',
            },
            {
                id: 'option_3',
                image: 'https://i.imgur.com/hGpYHWz.png',
                text: 'Banana',
                correct: true,
            },
            {
                id: 'option_1',
                image: 'https://i.imgur.com/vp4uDc1.png',
                text: 'Glass',
            },
        ],
    },
    {
        id: "q5",
        type: "OPEN_ENDED",
        text: "You drink a water",
        answer: "Я пь'ю воду",
    },
    {
        question: 'Що з цього "Яблуко"?',
        type: 'Image_Multiple_Choice_Question',
        options: [
            {
                id: 'option_1',
                image: 'https://i.imgur.com/vp4uDc1.png',
                text: 'Glass',
            },
            {
                id: 'option_2',
                image: 'https://i.imgur.com/tKfNgHj.png',
                text: 'Apple',
                correct: true,
            },
            {
                id: 'option_3',
                image: 'https://i.imgur.com/hGpYHWz.png',
                text: 'Banana',
            },
            {
                id: 'option_4',
                image: 'https://i.imgur.com/OVjJlZM.png',
                text: 'Bottle',
            },
        ],
    },
    {
        id: 'q5',
        type: 'OPEN_ENDED',
        text: 'I ate a banana',
        answer: "Я з'їв банан",
    },
    {
        id: 'q5',
        type: 'OPEN_ENDED',
        text: 'A glass of milk',
        answer: "Стакан молока",
    },
    {
        question: 'Що з цього "Що з цього бутилка"?',
        type: 'Image_Multiple_Choice_Question',
        options: [
            {
                id: 'option_1',
                image: 'https://i.imgur.com/vp4uDc1.png',
                text: 'Glass',
            },
            {
                id: 'option_2',
                image: 'https://i.imgur.com/tKfNgHj.png',
                text: 'Apple',
            },
            {
                id: 'option_3',
                image: 'https://i.imgur.com/hGpYHWz.png',
                text: 'Banana',
            },
            {
                id: 'option_4',
                image: 'https://i.imgur.com/OVjJlZM.png',
                text: 'Bottle',
                correct: true,
            },
        ],
    },
]