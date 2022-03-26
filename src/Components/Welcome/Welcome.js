import React from 'react'

import { useNavigate } from 'react-router-dom';
import './Welcome.css';
function Welcome() {
    const navigate=useNavigate();
    const book=()=>{
        navigate("/Contact");
    }
    return (
        <div className='container-home'>

            <div className='part-sitter'>
                <div className='img-sitter' ></div>
               
                <div>Book your baby sitter now <button type='submit' onClick={book}>Book now</button></div>
            </div>
            
        </div>
    )
}

export default Welcome
