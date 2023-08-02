export default [
    /* {
        id: 'q0',
        type: 'Fill_the_blank_question',
        text_Pre: 'One bread, two ',
        text_Post: '',
        image: 'https://i.imgur.com/vrW4Alv.png',
        options: ['three', 'bread', 'breads', 'salt', 'four'],
        correct: 'breads',
    },
    {
        id: 'q1',
        type: 'Fill_the_blank_question_multiple',
        parts: 
        [
            {
                text: 'One',
                is_Blank: true,
            },
            {
                text: 'breads',
            },
            {
                text: 'Two',
                is_Blank: true,
            },
            {
                text: 'bread',
            },
        ],
        options: ['One', 'Two', 'breads', 'salt', 'four'],
    },*/
    {
        question: 'Що з цього "Склянка"?',
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
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic9.depositphotos.com%2F1497380%2F1190%2Fv%2F950%2Fdepositphotos_11908121-stock-illustration-a-glass-of-milk-cartoon.jpg&f=1&nofb=1&ipt=11c4b4ff19633ffa2d207d83ffecac7cba8dd978516d5b14b66d1dd95d3e8bc8&ipo=images',
                text: 'Glass',
            },
            {
                id: 'option_2',
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fapple-cartoon-vector-id165977092%3Fk%3D6%26m%3D165977092%26s%3D612x612%26w%3D0%26h%3DmALjeuMkOT-kA-ZZu2CJCF5WBX_QbFNOOGD2GZeIAvc%3D&f=1&nofb=1&ipt=155192f478d90dca3b474cadb822e971d45165ba28ab60d2d348666e69af2e5b&ipo=images',
                text: 'Apple',
                correct: true,
            },
            {
                id: 'option_3',
                image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts101.com%2Ffiles%2F50%2F9165F8700D3D9F99AD938405FB947EBF%2FBananas.png&f=1&nofb=1&ipt=37d89ba876063617ff0eee930d31ce4967942388fc648e30b6d7e5647991661a&ipo=images',
                text: 'Banana',
            },
            {
                id: 'option_4',
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F511%2F473%2Flarge_2x%2Fsports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg&f=1&nofb=1&ipt=f1ce75e98f6668fad6de71462975380ffbc2dfc155da0a715c020e712cdd812c&ipo=images',
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
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic9.depositphotos.com%2F1497380%2F1190%2Fv%2F950%2Fdepositphotos_11908121-stock-illustration-a-glass-of-milk-cartoon.jpg&f=1&nofb=1&ipt=11c4b4ff19633ffa2d207d83ffecac7cba8dd978516d5b14b66d1dd95d3e8bc8&ipo=images',
                text: 'Glass',
            },
            {
                id: 'option_2',
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fapple-cartoon-vector-id165977092%3Fk%3D6%26m%3D165977092%26s%3D612x612%26w%3D0%26h%3DmALjeuMkOT-kA-ZZu2CJCF5WBX_QbFNOOGD2GZeIAvc%3D&f=1&nofb=1&ipt=155192f478d90dca3b474cadb822e971d45165ba28ab60d2d348666e69af2e5b&ipo=images',
                text: 'Apple',
            },
            {
                id: 'option_3',
                image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts101.com%2Ffiles%2F50%2F9165F8700D3D9F99AD938405FB947EBF%2FBananas.png&f=1&nofb=1&ipt=37d89ba876063617ff0eee930d31ce4967942388fc648e30b6d7e5647991661a&ipo=images',
                text: 'Banana',
            },
            {
                id: 'option_4',
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F511%2F473%2Flarge_2x%2Fsports-water-bottle-convenient-water-bottle-for-sports-activities-cartoon-style-vector.jpg&f=1&nofb=1&ipt=f1ce75e98f6668fad6de71462975380ffbc2dfc155da0a715c020e712cdd812c&ipo=images',
                text: 'Bottle',
                correct: true,
            },
        ],
    },
]