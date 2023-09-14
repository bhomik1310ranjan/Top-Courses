function Filter(props) {
    const filters = props.filterData;
    let category = props.category;
    const setCategory = props.setCategory;

    function categoryHandler(title) {
        setCategory(title);
    }

    return (
        <div className="w-11/12 flex flex-wrap justify-center items-center gap-4 py-4 mx-auto">
            {filters.map((filter) => {
                return (
                    <button
                        key={filter.id}
                        onClick={() => categoryHandler(filter.title)}
                        type="button"
                        className={`font-medium text-white text-lg tracking-wide bg-black px-3 py-1 rounded-md border-2 hover:bg-opacity-50 transition-all duration-300 ${
                            category === filter.title
                                ? "bg-opacity-60 border-white"
                                : "bg-opacity-40 border-transparent"
                        }`}
                    >
                        {filter.title}
                    </button>
                );
            })}
        </div>
    );
}

export default Filter;
