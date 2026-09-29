import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";
import PostList from "./Components/PostList";
import PostJson from "./Components/PostJson";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./Components/ErrorBoundary";

function HomeScreen() {
  return (
    <h1>Home</h1>
  );
}

function ProfileScreen() {
  return (
    <h1>Profile Screen</h1>
  );
}

function ShopScreen() {
  throw new Error("Shop crashed!");
}

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-4">

        <h1 className="mb-4">
          Week 12 - Day 6 Exercises XP
        </h1>

        <section>
          <h2>Exercise 1 - React Router Error Boundary</h2>

          <nav className="navbar navbar-expand navbar-dark bg-dark px-3 mb-4">
            <div className="navbar-nav">

              <NavLink
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>

              <NavLink
                to="/profile"
                className="nav-link"
              >
                Profile
              </NavLink>

              <NavLink
                to="/shop"
                className="nav-link"
              >
                Shop
              </NavLink>

            </div>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <HomeScreen />
                </ErrorBoundary>
              }
            />

            <Route
              path="/profile"
              element={
                <ErrorBoundary>
                  <ProfileScreen />
                </ErrorBoundary>
              }
            />

            <Route
              path="/shop"
              element={
                <ErrorBoundary>
                  <ShopScreen />
                </ErrorBoundary>
              }
            />
          </Routes>
        </section>

        <hr />

        <section>
         <h2>Exercise 2 - JSON Posts</h2>
         <PostList />
        </section>

        <hr />

        <section>
        <h2>Exercise 3 - Complex JSON</h2>
        <Example1 />

         <hr />

         <Example2 />

         <hr />

        <Example3 />
        </section>

        <hr />

       <section>
         <h2>Exercise 4 - POST JSON</h2>
         <PostJson />
       </section>

      </div>
    </BrowserRouter>
  );
}

export default App;