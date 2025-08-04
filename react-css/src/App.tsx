import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Button from "./components/Button";
import ListingItem from './components/ListingItem';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/tripitem":
        title = "";
        metaDescription = "";
        break;
      case "/destinationcard":
        title = "";
        metaDescription = "";
        break;
      case "/holidaycard":
        title = "";
        metaDescription = "";
        break;
      case "/hotelcard":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1171275946":
        title = "";
        metaDescription = "";
        break;
      case "/footer":
        title = "";
        metaDescription = "";
        break;
      case "/subscribesection":
        title = "";
        metaDescription = "";
        break;
      case "/button":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ListingItem />} />
      {/* <Route path="/tripitem" element={<TripItem />} />
      <Route path="/destinationcard" element={<DestinationCard />} />
      <Route path="/holidaycard" element={<HolidayCard />} />
      <Route path="/hotelcard" element={<HotelCard />} />
      <Route path="/frame-1171275946" element={<Frame />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/subscribesection" element={<SubscribeSection />} />
      <Route path="/button" element={<Button />} /> */}
    </Routes>
  );
}
export default App;
