import Homepage from "./Comp/Header/Homepage";
// import Login from "./Comp/User Login-Reg/Login";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Reg from "./Comp/User Login-Reg/Registeruser";
// import Page404 from "./Comp/page404/Page404";
import HeroSection from "./Comp/MainPage/main";
// import DoctorBooking from "./Comp/Banner/Banner";
import Banner from "./Comp/Banner/Banner";
import Doctors from "./Comp/Categories/catg";
import ReviewSection from "./Comp/Reviews/review";

function App() {
    return (
        <div>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Reg" element={<Reg />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="/Homepage" element={<Homepage />} />
                </Routes>
                <CollectionScreen />
                <Products />
            </BrowserRouter> */}
            <Homepage />
            <HeroSection />
            <Banner />
            <Doctors />
            <ReviewSection />
        </div>
    );
}

export default App;
