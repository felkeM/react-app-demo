import React from 'react';
import SwapiList from '../Posts/SwapiList';

export default function pageOne() {
    return (
        <> 
            <section>
                <header> 
                    <h1>SWAPI Page</h1>
                </header>
                <p>
                I'm baby kale chips affogato ennui lumbersexual, williamsburg paleo quinoa
                iceland normcore tumeric. Kitsch coloring book retro, seitan schlitz
                tattooed biodiesel vexillologist neutra. Synth mumblecore deep v, umami
                selfies normcore gluten-free snackwave. Seitan ramps drinking vinegar
                venmo keytar, humblebrag VHS post-ironic tacos godard pour-over.
                </p>
            </section>
            <section className="swapi-wrapper">
                <SwapiList />
            </section>
        </>
    )
}
