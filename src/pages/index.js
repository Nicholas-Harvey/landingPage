import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/cargif.gif'
import thumb02 from '../assets/images/voting.gif'
import thumb03 from '../assets/images/familygif.gif'
import thumb04 from '../assets/images/crystal.gif'
import thumb05 from '../assets/images/Radar.gif'
import thumb06 from '../assets/images/cli.gif'
import thumb07 from '../assets/images/searchbar.gif'
import thumb08 from '../assets/images/traingif.gif'


import full01 from '../assets/images/cargif.gif'
import full02 from '../assets/images/voting.gif'
import full03 from '../assets/images/familygif.gif'
import full04 from '../assets/images/searchbar.gif'
import full05 from '../assets/images/traingif.gif'
import full06 from '../assets/images/voting.gif'
import full07 from '../assets/images/cli.gif'
import full08 from '../assets/images/Radar.gif'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'speedtrApp', linkDesA: "Click here to see the deployed page", linkDes: "Click here to see this web app's repository on Github", link: 'https://github.com/nicholas-harvey/Group_Project_1', linkA:'https://nicholas-harvey.github.io/Group_Project_1/'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'LibertyTree.com', linkDesA: "Click here to see the deployed page", linkDes: "Click here to see this web app's repository on Github", link: 'https://github.com/NDHF/libertyTree', linkA: 'https://liberty-tree-njb.herokuapp.com/'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Gif Generator', linkDesA: "Click here to see the deployed page", linkDes: "Click here to see this web app's repository on Github", link: 'https://github.com/nicholas-harvey/GIPHY.API-APP', linkA: 'https://nicholas-harvey.github.io/GIPHY.API-APP/'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Crystal Collector Game', linkDesA: "Click here to see the deployed page", linkDes: "Click here to see this web app's repository on Github", link: 'https://github.com/nicholas-harvey/unit-4-game/', linkA:'https://nicholas-harvey.github.io/unit-4-game/'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'SweetRelief Restroom Finder', linkDesA: "Click here to see the deployed page", linkDes: "Click here to see this web app's repository on Github", link: 'https://github.com/nicholas-harvey/restRoomFinder', linkA:'https://restroomfinderapp.herokuapp.com/'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Sql Database', linkDesA: "Click here to see see a video description of this web app", linkDes: "Click here to see this web app's repository on Github", link: 'https://github.com/nicholas-harvey/Amazon_My_Sql_Homework', linkA:'https://github.com/nicholas-harvey/Amazon_My_Sql_Homework/blob/a1918b516436515b4aa8dc479187f2a20fe3f051/README%20(LINK%20TO%20VIDEO%20DESCRIPTION%20INSIDE%20HERE).md'},
    { id: '7', source: full07, thumbnail: thumb07, caption: 'Liri-Node App', linkDesA: "Click here for a Link to ReadMe.md file", linkDes: "Click here to see this web app's repository on Github", link: 'https://github.com/nicholas-harvey/liri-node-app', linkA: 'https://github.com/nicholas-harvey/liri-node-app/commit/c9ed1dfa0771227c12de645a55bac38fa2f81ebe'},
    { id: '7', source: full08, thumbnail: thumb08, caption: 'Train Schedule', linkDesA: "Click here to see the deployed page", linkDes: "Click here to see this web app's repository on Github", link: 'https://github.com/nicholas-harvey/Train-Times', linkA:'https://nicholas-harvey.github.io/Train-Times/'}
];

class HomeIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
        password: '1492',
        }
    }

    render() {
        const siteTitle = "nicholasHarveyPortfolio"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Bio</h2>
                        </header>
                        <p>I am a web developer/web designer who specalizes in object orientated programming. 
                            ReactJS is the main language that I use although I do enjoy VueJS and AngualrJS as well. My hobbies include reading, watching soccer, hiking, and playing the guitar poorly.</p>
                        <br></br>
                        <p>Please take a look at some of my personal projects below</p>
                        {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
                    </section>

                    <section id="two">
                        <h2>Personal Projects</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description, link, linkDes, linkA, linkDesA }) => ({
                            source,
                            thumbnail,
                            caption,
                            description,
                            link,
                            linkDes,
                            linkA,
                            linkDesA
                        }))} />
{/* 
                        <ul className="actions">
                            <li><a href="#" className="button">Return to Bio</a></li>
                        </ul> */}
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Contact me about projects, job oportunities, or general web development questions.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form action="mailto:nicholas.harvey@gmail.com" method="get" enctype="text/plain">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Church Street,<br />
                                        Kings Park, New York<br />
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        631-827-9977
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">nicholas.harvey1914@gmail.com</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-file-word-o"><span className="label">Resume</span></h3>
                                        <a href="https://www.yumpu.com/en/document/read/62934614/nharveyresume-copy-converted">Resume</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <ul className="actions">
                            <li><a href="#" className="button">Return to Bio</a></li>
                        </ul>
                        <ul className="actions">
                            <li><a href="#" className="button">{this.state.password}</a></li>
                        </ul>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex