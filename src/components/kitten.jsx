import React from 'react';
import '../styles/fonts/font.css';
import '../styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: require("../userfiles/shop/medium/elfie4.JPG"),
        thumbnail: require("../userfiles/shop/medium/elfie4.JPG")
    },
    {
        original: require("../userfiles/shop/medium/elfie1.JPG"),
        thumbnail: require("../userfiles/shop/medium/elfie1.JPG")
    },
    {
        original: require("../userfiles/shop/medium/elfie2.JPG"),
        thumbnail: require("../userfiles/shop/medium/elfie2.JPG")
    },
    {
        original: require("../userfiles/shop/medium/elfie3.JPG"),
        thumbnail: require("../userfiles/shop/medium/elfie3.JPG")
    },
];

const Kitten = () => {
    return (
        <div className="litter_list__header">
            <div className="litter_list__headername"><h2><a href="kittens/litter-w88.html">Litter W2</a></h2>
            </div>
            <div className="ld">11.11.2021</div>
            <div className="cn">1 boy and 2 girls</div>
            <div className="rod_wrap">
                <div className="lh">
                    <span className="lhf">F</span>
                    <a href="our-cats/gentlemen/kopiya-quadruple-grand-champion-apollo-peace-coon-.html">
                        Irving MiracleBri Loretta British
                    </a>
                </div>
                <div className="lh">
                    <span className="lhm">M</span>
                    <a href="our-cats/ladies/varvara-valery-lorettabritish.html">
                        Varvara LorettaBritish
                    </a>
                </div>
            </div>
            <div className="js_shop row d-flex justify-content-around litter_list__item">
                <div className="col-md-4 litter_list__itemleft">
                    <a href="kittens/winnie.html" className="litter_list__item-name">
                        Winnie
                    </a>
                    <div className="litter_list__item-desc">
                        <p>British shorthair golden shaded point kitty-boy with blue eyes.</p>
                        <p>Price is $4800</p>
                        <p>Reserved for Linsey (Dallas, TX)</p>
                        <p></p>
                    </div>
                    <div className="d-block"></div>
                </div>
                <div className="col-md-8">
                    <div className="thumbs_wrap">
                        <div className="thumbs_fixed">
                            <ImageGallery items={images}
                                          infinite={true}
                                          thumbnailPosition={'left'}
                                          slideOnThumbnailOver={true}
                                          showBullets={true}
                                          slideInterval={1700}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Kitten;