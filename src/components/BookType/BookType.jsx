import { CiStar } from "react-icons/ci";

const BookType = ({book}) => {
    const { image, bookId, bookName, author, review, totalPages, rating, category, tags, publisher,yearOfPublishing  } = book;
    return (
        <div className="card card-compact w-80 lg:w-96 bg-base-100 shadow-xl">
  <figure><img src= {image} alt="Shoes" /></figure>
  <div className="card-body">
    <div className="flex justify-between rounded-3xl"  >
        <button className=" btn rounded-full  text-green-500">Young Adult</button>
        <button className="btn rounded-full  text-green-500">Identity</button>
        </div>
  
    <h2 className="card-title">{author}</h2>
    <p>By:{publisher}</p>
    <hr />
    <div className="card-actions flex justify-between">
     <div>Fiction</div>
     <div className="flex items-center ">
     <div>{rating}</div>
     <div><CiStar /></div>
     </div>
    </div>
  </div>
</div>
    );
};

export default BookType;