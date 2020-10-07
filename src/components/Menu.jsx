import React from 'react';

const Menu = ()=>{
    return <div>
        <nav className='dark' data-spy='affix' id='main'>
            <div className='logo'>
                <span className='glyphicon glyphicon-flash'></span>
                The Agency
            </div>
            <a className='icon pull-right' href='pages/contact.html'>
                <span className='fa fa-envelope-o'></span>
            </a>
            <a className='icon toggle-menu pull-right' href='#'>
                <span className='fa fa-bars'></span>
            </a>
            <ul>
                <li>
                    <a className='home active' href='#'>
                        Home
                    </a>
                </li>
                <li>
                    <a className='about' href='pages/about.html'>
                        About
                    </a>
                </li>
                <li>
                    <a className='projects' href='pages/projects.html'>
                        Projects
                    </a>
                </li>
                <li>
                    <a className='services' href='pages/services.html'>
                        Services
                    </a>
                </li>
                <li>
                    <a className='blog' href='pages/blog.html'>
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
    </div>
}

export default Menu;