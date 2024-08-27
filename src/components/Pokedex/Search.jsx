const Search = ({ searchTerm, setSetSearchTerm, handleSearch }) => {
    return (
        <>
            <div className="row mb-3">
                <form className="col-md-4" onSubmit={(e) => handleSearch(e)}>
                    <label htmlFor="search" className="form-label">
                        Search
                    </label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            id="search"
                            name="search-pokemon"
                            type="text"
                            value={searchTerm}
                            onInput={(e) => setSetSearchTerm(e.target.value)}
                            required
                        />
                        <button className="btn btn-primary" type="submit">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Search;
