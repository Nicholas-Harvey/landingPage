import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://github.com/nicholas-harvey" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/nicholas-harvey-996aa5129/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://www.yumpu.com/en/document/read/62934614/nharveyresume-copy-converted" className="icon fa-file-word-o"><span className="label">Resume</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
