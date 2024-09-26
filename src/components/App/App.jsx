import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

const Home = lazy(() => import("../../pages/HomePage"));
const Movies = lazy(() => import("../../pages/MoviesPage"));
const NotFound = lazy(() => import("../../pages/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));

import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}
