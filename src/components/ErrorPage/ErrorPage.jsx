import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center my-16">404 page</h1>
            <Link className="text-3xl font-semibold text-center flex justify-center align-middle my-16" to='/'><button className="bg-orange-500 text-white">Go Back Home</button> </Link>
        </div>
    );
};

export default ErrorPage;