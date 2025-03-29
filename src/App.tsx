import { FC } from 'react';
import Section from './layout/section';
import Title from './layout/title';
// import Gallery from './components/gallery';
// import Contact from './components/contact';
// import Calendar from './components/calendar';
// import Counter from './components/counter';
// import TopBanner from './components/topBanner';
// import TopImage from './components/topImage';
// import TopDescription from './components/topDescription';
// import Location from './components/location';
// import Give from './components/give';
import Finish from './components/finish';
import Footer from './layout/footer';
// import Information from './components/information';
import Main from './layout/main';
// import Invitation from './components/invitation';
import TopBanner from './components2/topBanner/TopBanner';
import Invitation from './components2/invitation';
import Counter from './components2/counter';
import Information from './components2/information';
import Calendar from './components2/calendar';
import Gallery from './components2/gallery';
import Location from './components2/Location'

import './App.css';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App: FC = () => {
  return (
    <Main>
      {/* <TopBanner />
      <TopImage />
      <TopDescription />
      <Section>
        <Title title="INVITATION" />
        <Invitation />
      </Section>
      <Section>
        <Contact />
      </Section>
      <Section bg="secondary">
        <Title title="CALENDAR" />
        <Calendar />
        <Counter />
      </Section>
      <Section>
        <Title title="GALLERY" />
        <Gallery />
      </Section>
      <Section>
        <Title title="LOCATION" />
        <Location />
      </Section>
      <Section>
        <Title title="INFORMATION" />
        <Information />
      </Section>
      <Section>
        <Title title="GIVE" />
        <Give />
      </Section> */}

      <TopBanner />
      <Section>
        <Title title="INVITATION" />
        <Invitation />
      </Section>
      <Section>
        <Title title="D-Day" />
        <Counter />
      </Section>
      <Section>
        <Title title="예식 안내" />
        <Information />
        <Calendar />
      </Section>
      <Section>
        <Title title="OUT MOMENTS" />
        <Gallery />
      </Section>
      <Section>
        <Title title="오시는길" />
        <Location />
      </Section>
      <Section>
        <Title title="마음 전하실 곳" />
      </Section>

      {/* <Finish /> */}
      <Footer />

      <ToastContainer position="top-center" autoClose={1000} />
    </Main>
  );
};

export default App;
