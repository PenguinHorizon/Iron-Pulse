import Hero from '../components/Hero';
import BoostRoutine from '../components/BoostRoutine';
import TransformFitness from '../components/TransformFitness';
import PricingPlans from '../components/PricingPlans';
import Testimonials from '../components/Testimonials';
const Home: React.FC = () => {
    return (
        <div className="bg-black text-white">
            <Hero />
            <BoostRoutine />
            <TransformFitness />
            <PricingPlans />
            <Testimonials />
        </div>
    );
};

export default Home;
