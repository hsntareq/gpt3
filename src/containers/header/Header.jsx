import React from 'react';
import './header.css';
import imgPeople from '../../assets/people.png';
import imgAi from '../../assets/ai.png';

function Header() {
    return (
        <div id='home' className='gpt3__header section__padding'>
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Lets build something amaging with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder='Your email ' />
                    <button type='button'>Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={imgPeople} alt="imgPeople" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={imgAi} alt="ai" />
            </div>
        </div>
    )
}

export default Header;