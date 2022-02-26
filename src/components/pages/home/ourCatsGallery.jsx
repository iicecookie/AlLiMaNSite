import React, {useCallback} from 'react';
import Gallery from 'react-photo-gallery' ;
import {useNavigate} from "react-router-dom";
import {ourCats} from "../../../contentData/ourCats/OurCats";
import * as PropTypes from "prop-types";

const OurCatsGallery = () => {

    function getImages() {
        let images = [];

        for (let i = 0; i < 5; i++) {
            images[i] = {
                key: ourCats[i].name,
                height: 4,
                width: 6,
                src: require(`/src/contentData/ourCats/${ourCats[i].gender === 0 ? "girls" : "boys"}/${ourCats[i].name.toLowerCase()}/${ourCats[i].name.toLowerCase()}1.jpg`),
            };
        }
        return images;
    }

    const imageRenderer = useCallback(
        ({index, key, photo}) => (
            <SelectedImage
                key={key}
                margin={"2px"}
                index={index}
                photo={photo}/>
        ));

    return (
        <Gallery photos={getImages()} renderImage={imageRenderer}/>
    )
}

const SelectedImage = ({photo, margin}) => {

    let history = useNavigate();
    const imageClick = (photo) => {
        history('/our-cats/' + photo.key)
    }
    return (
        <div style={{margin, height: photo.height, width: photo.width}}>
            <div className="container">
                <img {...photo} onClick={() => imageClick(photo)}/>
                <div className="overlay">{photo.key}</div>
            </div>
        </div>
    );
};

SelectedImage.propTypes = {
    photo: PropTypes.any,
    margin: PropTypes.string
};

export default OurCatsGallery;