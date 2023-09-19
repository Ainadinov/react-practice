import { useState } from 'react';
import { MOORE__ICON } from '../../component/images/index.js';
import './index.css';
const navItems = ["Home","Setting", "BacUp", "Mail", "Cloud"]

function SideBars(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className='sidebar-inner'>
                <header className='sidebar-header'>
                    <button 
                        type='button'
                        className='sidebar-header'
                        onClick={() => setIsOpen(!isOpen)}    
                    >
                        <span>
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>
                    <span className='sidebar-logo'>LoGo</span>
                </header>

                <nav className='sidebar-menu'>
                    {navItems.map(item => (
                        <button className='sidebar-button'>
                            <span>{"LoGo"}</span>
                            <p>{item}</p>
                        </button>
                    ))}
                </nav>
            </div>
        </aside>
    )
}

export default SideBars