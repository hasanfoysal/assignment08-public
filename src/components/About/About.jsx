
const About = () => {
    return (
        <div className=" lg:h-[370px] lg:max-w-6xl mx-auto bg-base-200 rounded-xl lg:my-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="public/photo-1591951425328-48c1fe7179cd.avif" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About Book Vibe!</h1>
      <p className="py-6">Book Vibe is a fictional online bookstore that offers a curated selection of books across various genres. 
     We are passionate about bringing you the best reading experience possible. Whether  a seasoned bibliophile or just starting to explore the world of literature, we hope find something to love on our shelves</p>
      <button className="btn btn-outline btn-accent">View Details</button>
    </div>
  </div>
</div>
    );
};

export default About;