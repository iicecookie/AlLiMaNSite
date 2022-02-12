import React, {useState} from 'react';
import KittenCard from './kittenCard';
import PropTypes from "prop-types";
import {kittensForSale} from "../contentData/kittenForSale/KittensForSale";
import {AlLiManLitters} from "../contentData/Litter";

const KittensList = (props) => {

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
                                <KittenCard key={kitten.id}
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

KittensList.propTypes = {
};

export default KittensList;