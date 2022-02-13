import React from 'react';
import LitterCard from "./litterCard";
import {littersList} from "../../../contentData/LittersData/LittersList";

const LitterList = () => {

    return (
        <div>
            <section className="litter_list">
                <div className="container-fluid ">
                    <section className="litter_list">
                        <div className="row no-gutters d-flex align-items-stretch">
                            {littersList.map(litter =>
                                <LitterCard key={litter.litterId}
                                            litter={litter}/>
                            )}
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default LitterList;