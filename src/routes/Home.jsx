import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="homePictures">
        <NavLink to="/animals" className=" animalPicture">
          <div className="animalsHomeLink">ANIMALS</div>
        </NavLink>
        <NavLink to="/birds" className="birdPicture">
          <div className="birdsHomeLink">BIRDS</div>
        </NavLink>
      </div>
    </>
  );
}

export default Home;
