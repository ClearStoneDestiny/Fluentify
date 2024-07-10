export default 
   [   //1 Question
        {
            question: 'Що з цього "Банан"?',
            type: 'Image_Multiple_Choice_Question',
            options: [
                {
                    id: 'option_4',
                    image: 'https://i.imgur.com/gZbPSLL.png',
                    text: 'Orange',
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
                    image: 'https://i.imgur.com/b4avnJN.png',
                    text: 'Cherry',
                },
            ],
        },

        //2 Question
        {
            question: 'Що з цього "Яблуко"?',
            type: 'Image_Multiple_Choice_Question',
            options: [
                {
                    id: 'option_4',
                    image: 'https://i.imgur.com/Z3Meid7.png',
                    text: 'Watermelon',
                },
                {
                    id: 'option_2',
                    image: 'https://i.imgur.com/T673Z8p.png',
                    text: 'Lemon',
                },
                {
                    id: 'option_3',
                    image: 'https://i.imgur.com/b4avnJN.png',
                    text: 'Cherry',
                },
                {
                    id: 'option_1',
                    image: 'https://i.imgur.com/tKfNgHj.png',
                    text: 'Apple',
                    correct: true,
                },
            ],
        },

        //3 Question
        {
            question: 'Один банан, два яблука',
            id: 'q2',
            type: 'Fill_the_blank_only_question',
            parts: [
                {
                    text: 'One',
                    isBlank: true,
                },
                {
                    text: 'banana',
                    isBlank: true,
                },
                {
                    text: 'Two',
                    isBlank: true,
                },
                {
                    text: 'apples',
                    isBlank: true,
                },
            ],
            options: ['One', 'apples', 'Two', 'apple', 'banana', 'lemon'],
        },

        //4 Question
        {
            question: "Я з'їв лимон",
            id: 'q1',
            type: 'Fill_the_blank_multiple_question',
            parts: [
                {
                    text: 'I',
                    isBlank: true,
                },
                {
                    text: 'ate ',
                },
               
                {
                    text: ' a',
                    
                },
                {
                    text: 'lemon',
                    isBlank: true,
                },
            ],
            options: ['apple', 'I', 'Me', 'lemon'],
        },

        //5 Question
        {
            question: 'Що з цього "Їжа"?',
            type: 'Image_Multiple_Choice_Question',
            options: [
                {
                    id: 'option_1',
                    image: 'https://i.imgur.com/1iQ0DHQ.png',
                    text: 'Food',
                    correct: true,
                },
                {
                    id: 'option_2',
                    image: 'https://i.imgur.com/bE0RYUZ.png',
                    text: 'Berries',
                },
                {
                    id: 'option_3',
                    image: 'https://i.imgur.com/julky4w.png',
                    text: 'Strawberry',
                },
                {
                    id: 'option_4',
                    image: 'https://i.imgur.com/lUlo6Nh.png',
                    text: 'Raspberry',
                },
            ],
        },

         //6 Question
        {
            id: 'q0',
            type: 'Fill_the_blank_question',
            text_Pre: '',
            text_Post:' juice is one of my favourite drinks',
            image: 'https://i.imgur.com/J0MYW6S.png',
            options: ['Little', 'Bread', 'Grass', 'Wood', 'Apple'],
            correct: 'Apple',
        },

        //7 Question
        {
            question: 'Що з цього "Кавун"?',
            type: 'Image_Multiple_Choice_Question',
            options: [
                {
                    id: 'option_1',
                    image: 'https://i.imgur.com/tKfNgHj.png',
                    text: 'Apple',
                },
                {
                    id: 'option_2',
                    image: 'https://i.imgur.com/Z3Meid7.png',
                    text: 'Watermelon',
                    correct: true,
                },
                {
                    id: 'option_3',
                    image: 'https://i.imgur.com/1iQ0DHQ.png',
                    text: 'Food',
                },
                {
                    id: 'option_4',
                    image: 'https://i.imgur.com/hGpYHWz.png',
                    text: 'Banana',
                },
            ],
        },

        //8 Question
        {
            id: 'q0',
            type: 'Fill_the_blank_question',
            text_Pre: 'Strawberries and rasberries are ',
            text_Post:'',
            image: 'https://i.imgur.com/bE0RYUZ.png',
            options: ['fruits', 'stone', 'berries', 'wood', 'apple'],
            correct: 'berries',
        },

        //9 Question
        {
            question: 'Що з цього "Апельсин"?',
            type: 'Image_Multiple_Choice_Question',
            options: [
                {
                    id: 'option_4',
                    image: 'https://i.imgur.com/b4avnJN.png',
                    text: 'Cherry',
                },
                {
                    id: 'option_2',
                    image: 'https://i.imgur.com/hGpYHWz.png',
                    text: 'Banana',
                },
                {
                    id: 'option_3',
                    image: 'https://i.imgur.com/gZbPSLL.png',
                    text: 'Orange',
                    correct: true,
                },
                {
                    id: 'option_1',
                    image: 'https://i.imgur.com/T673Z8p.png',
                    text: 'Lemon',
                },
            ],
        },

        //10 Question
        {
            id: "q5",
            type: "OPEN_ENDED",
            text: "I don't like oranges",
            answer: "Я не люблю апельсини",
        },

        //11 Question
        {
            question: 'Що з цього "Ягоди"?',
            type: 'Image_Multiple_Choice_Question',
            options: [
                {
                    id: 'option_1',
                    image: 'https://i.imgur.com/bE0RYUZ.png',
                    text: 'Berries',
                    correct: true,
                },
                {
                    id: 'option_2',
                    image: 'https://i.imgur.com/gZbPSLL.png',
                    text: 'Orange',
                    
                },
                {
                    id: 'option_3',
                    image: 'https://i.imgur.com/lUlo6Nh.png',
                    text: 'Raspberry',
                },
                {
                    id: 'option_4',
                    image: 'https://i.imgur.com/1iQ0DHQ.png',
                    text: 'Food',
                },
            ],
        },

        //12 Question
        {
            id: 'q5',
            type: 'OPEN_ENDED',
            text: 'I eat a banana',
            answer: "Я з'їв банан",
        },

        //13 Question
        {
            question: 'Що з цього "Що з цього Вишня"?',
            type: 'Image_Multiple_Choice_Question',
            options: [
                {
                    id: 'option_1',
                    image: 'https://i.imgur.com/lUlo6Nh.png',
                    text: 'Raspberry',
                },
                {
                    id: 'option_2',
                    image: 'https://i.imgur.com/hGpYHWz.png',
                    text: 'Banana',
                },
                {
                    id: 'option_3',
                    image: 'https://i.imgur.com/b4avnJN.png',
                    text: 'Cherry',
                    correct: true,
                },
                {
                    id: 'option_4',
                    image: 'https://i.imgur.com/Z3Meid7.png',
                    text: 'Watermelon',
                },
            ],
        },

        //14 Question
        {
            id: 'q5',
            type: 'OPEN_ENDED',
            text: "I don't like lemons",
            answer: "Я не люблю лимони",
        },

        //15 Question
        {
            question: 'Що з цього "Що з цього Лимон"?',
            type: 'Image_Multiple_Choice_Question',
            options: [
                {
                    id: 'option_1',
                    image: 'https://i.imgur.com/julky4w.png',
                    text: 'Strawberry',
                },
                {
                    id: 'option_2',
                    image: 'https://i.imgur.com/tKfNgHj.png',
                    text: 'Apple',
                },
                {
                    id: 'option_3',
                    image: 'https://i.imgur.com/b4avnJN.png',
                    text: 'Cherry',
                },
                {
                    id: 'option_4',
                    image: 'https://i.imgur.com/T673Z8p.png',
                    text: 'Lemon',
                    correct: true,
                },
            ],
        },

        //16 Question
        {
            question: 'Що з цього "Що з цього Полуниця"?',
            type: 'Image_Multiple_Choice_Question',
            options: [
                {
                    id: 'option_1',
                    image: 'https://i.imgur.com/julky4w.png',
                    text: 'Strawberry',
                    correct: true,
                },
                {
                    id: 'option_2',
                    image: 'https://i.imgur.com/1iQ0DHQ.png',
                    text: 'Food',
                },
                {
                    id: 'option_3',
                    image: 'https://i.imgur.com/bE0RYUZ.png',
                    text: 'Berries',
                },
                {
                    id: 'option_4',
                    image: 'https://i.imgur.com/hGpYHWz.png',
                    text: 'Banana',
                },
            ],
        },

        //17 Question
        {
            question: 'Я дуже люблю їсти',
            id: 'q2',
            type: 'Fill_the_blank_only_question',
            parts: [
                {
                    text: 'I',
                    isBlank: true,
                },
                {
                    text: 'really',
                    isBlank: true,
                },
                {
                    text: 'like to',
                    isBlank: true,
                },
                {
                    text: 'eat',
                    isBlank: true,
                },
            ],
            options: ['eat', 'I', 'ate', 'like to', 'really', 'like'],
        },

        //18 Question
        {
            question: 'Що з цього "Що з цього Малина"?',
            type: 'Image_Multiple_Choice_Question',
            options: [
                {
                    id: 'option_1',
                    image: 'https://i.imgur.com/b4avnJN.png',
                    text: 'Cherry',
                },
                {
                    id: 'option_2',
                    image: 'https://i.imgur.com/tKfNgHj.png',
                    text: 'Apple',
                },
                {
                    id: 'option_3',
                    image: 'https://i.imgur.com/gZbPSLL.png',
                    text: 'Orange',
                },
                {
                    id: 'option_4',
                    image: 'https://i.imgur.com/lUlo6Nh.png',
                    text: 'Raspberry',
                    correct: true,
                },
            ],
        },
   ]
