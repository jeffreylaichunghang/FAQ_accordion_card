/* eslint-disable react/prop-types */
import { useRef } from 'react'

import arrowDownIcon from '../images/icon-arrow-down.svg'

function QuestionItem({
    question = '',
    answer = '',
    show,
    onClick = () => true
}) {
    const answerPanelRef = useRef()

    return (
        <div className='question-item' onClick={() => {
            onClick()
            answerPanelRef.current.classList.toggle('show')
        }}>
            <div className='question-section'>
                <p className={show ? 'text-bold question' : 'question'}>{question}</p>
                <img src={arrowDownIcon} className={show ? 'rotate-up' : 'rotate-down'} />
            </div>
            <div className={'answer-panel'} ref={answerPanelRef}>
                <p className='answer' >{answer}</p>
            </div>
            <hr />
        </div>
    )
}

export default QuestionItem
