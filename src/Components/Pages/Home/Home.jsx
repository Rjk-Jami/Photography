import React from 'react';
import Banner from './Banner';
import Speacialist from './Speacialist';
import OurDedication from './OurDedication';
import OurFaces from './OurFaces';
import OurCreativity from './OurCreativity';
import LatestWork from './LatestWork';
import TestimonialSection from './TestimonialSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Speacialist></Speacialist>
            <OurDedication></OurDedication>
            <OurFaces></OurFaces>
            <OurCreativity></OurCreativity>
            <LatestWork></LatestWork>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;