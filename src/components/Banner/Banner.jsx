import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero  bg-base-200 max-w-2xl lg:max-w-6xl mx-auto lg:my-12 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse gap-4 lg:gap-12">
          <img src="public/photo-1541963463532-d68292c34b19 (1).avif" className="max-w-sm rounded-lg shadow-2xl h-[278px] w-[260px] lg:h-[340px] lg:w-[390px]" />
          <div>
            <h1 className=" text-2xl lg:text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
        <div> <Link to='/book' >
            <button className="btn bg-green-500 text-white lg:mt-9">View The List</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;