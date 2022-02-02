import React from 'react';
import Kitten from '../components/kitten';


const KittenList = () => {
    return (
        <div>
            <main>
                <section className="litter_list">
                    <div className="container-fluid">
                        <section className="litter_list litter_m0">
                            <Kitten/>
                        </section>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default KittenList;