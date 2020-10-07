import React from 'react';

const Footer = ()=>{
    return <div>
        <section className='dark' id='footer'>
            <div className='row-fluid'>
                <div className='col-md-10 col-md-offset-1'>
                    <div className='row'>
                        <div className='col-md-6 block small'>
                            <h4>
                                Care for a cup of tea?
                            </h4>
                            <p>
                                Sed rhoncus facilisis nisl, sit amet congue nunc egestas nec. Vestibulum augue diam, vestibulum eget
                                sollicitudin sed, ultricies eget lacus. Proin sodales quam ut euismod blandit. Suspendisse gravida a dolor
                                id lacinia.
                                <br />
                                Vestibulum augue diam, vestibulum eget sollicitudin sed, ultricies eget lacus. Proin sodales quam ut
                                euismod blandit.
                            </p>
                        </div>
                        <div className='col-md-3 block small'>
                            <h4>
                                Shots
                            </h4>
                            <a className='thumbnail' href='#'>
                                <img src='http://placehold.it/400x400'/>
                            </a>
                            <a className='thumbnail' href='#'>
                                <img src='http://placehold.it/400x400'/>
                            </a>
                            <a className='thumbnail' href='#'>
                                <img src='http://placehold.it/400x400'/>
                            </a>
                            <a className='thumbnail' href='#'>
                                <img src='http://placehold.it/400x400'/>
                            </a>
                            <a className='thumbnail' href='#'>
                                <img src='http://placehold.it/400x400'/>
                            </a>
                            <a className='thumbnail' href='#'>
                                <img src='http://placehold.it/400x400'/>
                            </a>
                        </div>
                        <div className='col-md-3 block small'>
                            <h4>
                                Find Us
                            </h4>
                            <div className='row'>
                                <div className='col-md-1 col-xs-2'>
                                    <div className='fa fa-location-arrow pre-icon'></div>
                                </div>
                                <div className='col-md-10 col-xs-9'>
                                    <p className='small'>
                                        Superstreet 1337<br />
                                        12309, AB, USA
                                    </p>
                                </div>
                                <div className='col-md-1 col-xs-2'>
                                    <div className='fa fa-phone pre-icon'></div>
                                </div>
                                <div className='col-md-10 col-xs-9'>
                                    <p className='small'>
                                        (123) 456 7890
                                    </p>
                                </div>
                                <div className='col-md-1 col-xs-2'>
                                    <div className='fa fa-briefcase pre-icon'></div>
                                </div>
                                <div className='col-md-10 col-xs-9'>
                                    <p className='small'>
                                        9am - 5pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row-fluid foot'>
                <div className='col-md-10 col-md-offset-1'>
                    <div className='row inner'>
                        <div className='col-md-12 block small bottom'>
                            <div className='btn-group btn-group-justified'>
                                <div className='btn-group'>
                                    <a className='icon' href='#'>
                                        <span className='fa fa-twitter'></span>
                                    </a>
                                </div>
                                <div className='btn-group'>
                                    <a className='icon' href='#'>
                                        <span className='fa fa-facebook'></span>
                                    </a>
                                </div>
                                <div className='btn-group'>
                                    <a className='icon' href='#'>
                                        <span className='fa fa-linkedin'></span>
                                    </a>
                                </div>
                                <div className='btn-group'>
                                    <a className='icon' href='#'>
                                        <span className='fa fa-instagram'></span>
                                    </a>
                                </div>
                                <div className='btn-group'>
                                    <a className='icon' href='#'>
                                        <span className='fa fa-pinterest'></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Footer;