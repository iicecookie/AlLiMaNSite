import React from 'react';
import KittenCard from './kittenCard';
import {littersList} from "../../../contentData/littersData/LittersList";
import PropTypes from "prop-types";

const KittensList = (props) => {

    let kittensList = [];

    function GetKittensList() {
        if (props.litterCode) {
            littersList.forEach(litter => {
                if (litter.code === props.litterCode) {
                    litter.kittens.forEach(kitten => {
                        kittensList.push(kitten);
                    })
                }
            })
        } else {
            littersList.forEach(litter => {
                litter.kittens.forEach(kitten => {
                    if (kitten.status === 'sale') {
                        kittensList.push(kitten);
                    }
                })
            })
        }
        return kittensList;
    }

    function GetLitter(kitten) {
        return littersList.filter(litter => litter.litterId === kitten.litterId)[0];
    }

    return (
        <div>
            <main>
                <section className="litter_list">
                    <div className="container-fluid">
                        <section className="litter_list litter_m0">
                            {GetKittensList().map(kitten =>
                                <KittenCard key={kitten.id}
                                            kitten={kitten}
                                            kittenCount={kittensList.length}
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
    litterCode: PropTypes.string,
};

export default KittensList;