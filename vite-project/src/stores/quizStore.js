import {reactive} from "vue";

export let quizState = reactive({
    name: 'First Quiz',
    questions: [
        {
            question: 'Question 01',
            answers: [
                {
                    title: 'Answer 01',
                    correct: true
                },
                {
                    title: 'Answer 02',
                    correct: false
                },
                {
                    title: 'Answer 03',
                    correct: false
                },
            ]
        },
        {
            question: 'Question 02',
            answers: [
                {
                    title: 'Answer 01',
                    correct: false
                },
                {
                    title: 'Answer 02',
                    correct: true
                },
                {
                    title: 'Answer 03',
                    correct: false
                },
            ]
        }
    ]
});