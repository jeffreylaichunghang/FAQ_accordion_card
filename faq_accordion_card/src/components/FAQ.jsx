import React, { useState } from 'react'

import QuestionItem from './QuestionItem'

function FAQ() {
    const [show, setShow] = useState(null)

    return (
        <div className='faq-container'>
            <h1>FAQ</h1>
            <div className='question-list'>
                {
                    [
                        {
                            question: 'How many team members can I invite?',
                            answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
                        },
                        {
                            question: 'What is the maximum file upload size?',
                            answer: ' No more than 2GB. All files in your account must fit your allotted storage space.',
                        },
                        {
                            question: 'How do I reset my password?',
                            answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
                        },
                        {
                            question: 'Can I cancel my subscription?',
                            answer: 'Yes! Send us a message and we\'ll process your request no questions asked.',
                        },
                        {
                            question: 'Do you provide additional support?',
                            answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
                        },
                    ].map((item, index) => (
                        <QuestionItem
                            key={`question_${index}`}
                            question={item.question}
                            answer={item.answer}
                            show={show === index}
                            onClick={() => {
                                show !== index ?
                                    setShow(index) :
                                    setShow(null)
                            }}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FAQ
