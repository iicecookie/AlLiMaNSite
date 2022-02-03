import React, {useState} from 'react';
import Kitten from '../components/kitten';
import PropTypes from "prop-types";

const KittenList = (props) => {

    return (
        <div>
            <main>
                <section className="litter_list">
                    <div className="container-fluid">
                        <section className="litter_list litter_m0">
                            {props.kittens.map(kitten =>
                                <Kitten kitten={kitten} kittenCount={props.kittens.length} key={kitten.id}/>
                            )}
                        </section>
                    </div>
                </section>
            </main>
        </div>
    );
};

KittenList.propTypes = {
    kittens: PropTypes.array.isRequired,
    kittenCount: PropTypes.number.isRequired,
};

export default KittenList;