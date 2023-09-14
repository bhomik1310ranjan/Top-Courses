import { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data.js";
import Filter from "./components/Filter.jsx";
import Navbar from "./components/Navbar.jsx";
import Courses from "./components/Courses.jsx";
import Spinner from "./components/Spinner.jsx";
import DataNotFound from "./components/DataNotFound.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [category, setCategory] = useState(filterData[0].title);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Data not found");
            }
            const data = await response.json();
            setData(data.data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="bg-darkGrayishBlue min-h-screen">
                <Filter
                    filterData={filterData}
                    category={category}
                    setCategory={setCategory}
                />
                {loading ? (
                    <Spinner />
                ) : error ? (
                    <DataNotFound />
                ) : (
                    <Courses data={data} category={category} />
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default App;
