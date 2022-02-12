import React from 'react';
import KittenCard from './kittenCard';
import {littersList} from "../../../contentData/LittersData/LittersList";

const KittensList = (props) => {

    let kittensForSale = [];

    function GetKittensForSale() {
        littersList.forEach(litter => {
            litter.kittens.forEach(kitten => {
                if (kitten.status === 'sale') {
                    kittensForSale.push(kitten);
                }
            })
        })
        return kittensForSale;
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
                            {GetKittensForSale().map(kitten =>
                                <KittenCard key={kitten.id}
                                            kitten={kitten}
                                            kittenCount={kittensForSale.length}
                                            litter={GetLitter(kitten)}/>
                            )}
                        </section>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default KittensList;