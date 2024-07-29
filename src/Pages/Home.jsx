import Banner from '../Components/Banner/Banner';
import WelcomeSection from '../Components/WelcomeSection';
import EventsGallery from '../Components/EventsGallery';
import ProgressList from '../Components/ProgressList/ProgressList';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <WelcomeSection></WelcomeSection>
            <ProgressList></ProgressList>
            <EventsGallery></EventsGallery>
        </div>
    );
};

export default Home;