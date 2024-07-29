import Banner from '../Components/Banner/Banner';
import WelcomeSection from '../Components/WelcomeSection';
import EventsGallery from '../Components/EventsGallery';
import ProgressList from '../Components/ProgressList/ProgressList';
import SercicesEvent from '../Components/ServicesEvent';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <WelcomeSection></WelcomeSection>
            <SercicesEvent></SercicesEvent>
            <ProgressList></ProgressList>
            <EventsGallery></EventsGallery>
        </div>
    );
};

export default Home;