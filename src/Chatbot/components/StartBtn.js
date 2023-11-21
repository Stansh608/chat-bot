import React from 'react'

export default function StartBtn(props) {

    const initialAction = () => {
        props.actions.initialAction();
    }

    return (
        <div className='gStarted'>
            <button className='getStarted' onClick={() => initialAction()}>Let's Get Started</button>
        </div >
    )
}
