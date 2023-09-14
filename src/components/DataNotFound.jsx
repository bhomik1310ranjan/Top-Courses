import dataNotFound from "../assets/dataNotFound.png";

function DataNotFound() {
    return (
        <div className="w-11/12 flex flex-col items-center mx-auto">
            <img
                src={dataNotFound}
                alt="Data not found image"
                className="w-3/4 sm:w-1/3"
            />
            <p className="font-medium text-xl text-white tracking-wider">
                Data not found
            </p>
        </div>
    );
}

export default DataNotFound;
