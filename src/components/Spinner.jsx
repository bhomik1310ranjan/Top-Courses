function Spinner() {
    return (
        <div className="w-11/12 flex flex-col items-center gap-y-3 py-8 mx-auto">
            <div className="w-14 aspect-square border-8 border-t-darkDesaturatedBlue border-r-darkDesaturatedBlue border-l-darkDesaturatedBlue border-b-transparent rounded-full animate-spin"></div>
            <p className="font-medium text-xl text-white tracking-wider">
                Loading...
            </p>
        </div>
    );
}

export default Spinner;
