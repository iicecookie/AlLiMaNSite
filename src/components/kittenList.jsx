import React, {useState} from 'react';
import Kitten from '../components/kitten';
import PropTypes from "prop-types";
import {kittensForSale} from "../contentData/kittenForSale/kittensForSale";
import {AlLiManLitters} from "../contentData/Litter";

const KittenList = (props) => {

    const kittens = kittensForSale;
    const litters = AlLiManLitters;

    function GetLitter(kitten){
        return litters[kitten.litterId-1]
    }

    return (
        <div>
            <main>
                <section className="litter_list">
                    <div className="container-fluid">
                        <section className="litter_list litter_m0">
                            {kittens.map(kitten =>
                                <Kitten key={kitten.id}
                                        kitten={kitten}
                                        kittenCount={kittens.length}
                                        litter={GetLitter(kitten)}/>
                            )}
                        </section>
                    </div>
                </section>
            </main>
        </div>
    );
};

KittenList.propTypes = {
};

export default KittenList;