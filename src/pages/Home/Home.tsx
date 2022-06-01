import {
  MainNavbar,
  HeadPoster,
  MovieThumbnails,
  Subscribe,
} from "../../components/index";

const Home = () => {
  const movieCategories = [
    "Popular",
    "Upcoming",
    "Top Rated",
    "Action",
    "Sci-Fi",
    "Adventure",
  ];

  return (
    <>
      <MainNavbar />
      <HeadPoster />
      <MovieThumbnails data={movieCategories[0]} />
      <MovieThumbnails data={movieCategories[1]} />
      <Subscribe compType="discover"/>
      <MovieThumbnails data={movieCategories[2]} />
      <MovieThumbnails data={movieCategories[3]} />
      <Subscribe compType="device"/>
      <MovieThumbnails data={movieCategories[4]} />
      <MovieThumbnails data={movieCategories[5]} />
      <Subscribe compType="platform"/>
    </>
  );
};

export default Home;
