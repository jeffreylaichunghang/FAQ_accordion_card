import React from 'react'

import arrowDownIcon from '../images/icon-arrow-down.svg'

function QuestionItem({
    question = '',
    answer = '',
    show,
    onClick = () => true
}) {
    return (
        <div className='question-item' onClick={onClick}>
            <div className='question-section'>
                <p className='question'>{question}</p>
                <img src={arrowDownIcon} className={show ? 'rotate-up' : 'rotate-down'} />
            </div>
            <p className={show ? 'show-answer' : 'hidden-answer'}>{answer}</p>
            <hr />
        </div>
    )
}

export default QuestionItem
