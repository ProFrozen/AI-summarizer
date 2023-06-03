import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import UserLayout from "./layout/UserLayout/index";
import DefaultLayout from "./layout/AdminLayout/DefaultLayout";

import Home from "./pages/User/Home";
import Signup from "./pages/User/Signup";
import Signin from "./pages/User/Signin";
import Record from "./pages/User/Record";

import SignIn from './pages/Admin/Authentication/SignIn';
import SignUp from './pages/Admin/Authentication/SignUp';
import Calendar from './pages/Admin/Calendar';
import Chart from './pages/Admin/Chart';
import ECommerce from './pages/Admin/Dashboard/ECommerce';
import FormElements from './pages/Admin/Form/FormElements';
import FormLayout from './pages/Admin/Form/FormLayout';
import Profile from './pages/Admin/Profile';
import Settings from './pages/Admin/Settings';
import Tables from './pages/Admin/Tables';
import Alerts from './pages/Admin/UiElements/Alerts';
import Buttons from './pages/Admin/UiElements/Buttons';

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/record" element={<Record />} />
        </Route>
        {/* <Route path="/admin" element={<DefaultLayout />}> */}
          <Route path="/admin" element={<ECommerce />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forms/form-elements" element={<FormElements />} />
          <Route path="/forms/form-layout" element={<FormLayout />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/ui/alerts" element={<Alerts />} />
          <Route path="/ui/buttons" element={<Buttons />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
