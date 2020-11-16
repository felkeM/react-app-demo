import React from 'react';
import LocalDataList from '../Posts/LocalDataList';

export default function pageTwo() {
    return (
        <>  
            <section>
                <header>
                    <h1>Local App</h1>
                </header>
                <p>
                I'm baby kale chips affogato ennui lumbersexual, williamsburg paleo quinoa
                iceland normcore tumeric. Kitsch coloring book retro, seitan schlitz
                tattooed biodiesel vexillologist neutra. Synth mumblecore deep v, umami
                selfies normcore gluten-free snackwave. Seitan ramps drinking vinegar
                venmo keytar, humblebrag VHS post-ironic tacos godard pour-over.
                </p>
            </section>
            <section className="post-wrapper">
                <LocalDataList />
            </section>
        </>
    )
}
