import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";

class Gallery extends Component {
    constructor () {
        super();

        this.state = {
            lightboxIsOpen: false,
            selectedIndex: 0
        };
        
        this.toggleLightbox = this.toggleLightbox.bind(this);
    }
    toggleLightbox(selectedIndex) {
        this.setState(state => ({
            lightboxIsOpen: !state.lightboxIsOpen,
            selectedIndex
        }));
    }
    renderGallery (images) {
        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                        href={obj.source}
                        onClick={e => {
                            e.preventDefault();
                            this.toggleLightbox(i);
                        }}
                    >
                        <img src={obj.thumbnail} />
                    </a>

                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
        <a id='pageLink'href={obj.link}><h6>{obj.linkDes}</h6></a>
        <a id='gitLink'href={obj.linkA}><h6>{obj.linkDesA}</h6></a>
                </article>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render () {
        const { images } = this.props;
        const { selectedIndex, lightboxIsOpen } = this.state;

        return (
            <div>
                {this.renderGallery(images)}
                <ModalGateway>
                    {lightboxIsOpen && (
                        <Modal onClose={this.toggleLightbox}>
                            <Carousel currentIndex={selectedIndex} views={images} />
                        </Modal>
                    )}
                </ModalGateway>
            </div>
        );
    }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;