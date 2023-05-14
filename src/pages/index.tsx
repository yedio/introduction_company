import Map from '../components/common/Map';
import ContactUs from '../components/pages/main/ContactUs';

export default function Home() {
  return (
    <>
      <ContactUs />
      <Map providedStyle="!w-[100vw] ml-[50%] -translate-x-1/2" />
    </>
  );
}
