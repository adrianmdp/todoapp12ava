import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import {
  Admin,
  Home,
  Inhabitant,
  Inhabitants,
  Login,
  SaveInhabitant,
  SignUp,
  Users,
} from "./pages";

import { Outlet } from "react-router-dom";

import "./style.scss";
import { Test } from "./Test";
import { Test2 } from "./Test2";
import { PruebaProvider, Prueba2Provider } from "./contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <PruebaProvider>
    <Prueba2Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="test2" element={<Test2 />} />

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />

            <Route path="users" element={<Users />} />

            <Route path="inhabitants" element={<Outlet />}>
              <Route index element={<Inhabitants />} />
              <Route path=":id" element={<Inhabitant />} />
              <Route path="save" element={<SaveInhabitant />} />
              <Route path="save/:id" element={<SaveInhabitant />} />
            </Route>

            <Route path="admin" element={<Admin />} />
          </Route>

          {/* <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </Prueba2Provider>
  </PruebaProvider>
);
