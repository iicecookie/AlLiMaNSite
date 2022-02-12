import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import '../styles/css/imagePopUp.css';
import PropTypes from "prop-types";
import OurCatCard from "./pages/ourCatsPage/ourCatCard";

const images = [
    require('.././contentData/ourCats/boys/perseus/perseus2.JPG')
];

class ImagePopUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const {photoIndex, isOpen} = this.state;

        return (
            <div >
                <button className="btn" onClick={() => this.setState({isOpen: true})}>
                    {this.props.Label}
                </button>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({isOpen: false})}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

ImagePopUp.propTypes = {
    Label: PropTypes.string.isRequired
};

export default ImagePopUp;