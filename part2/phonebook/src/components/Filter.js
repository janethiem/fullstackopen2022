const Filter = ({filterName, handleFilterChange}) => {
     return (
        <div>
        filter numbers by name: <input
          value={filterName}
          onChange={handleFilterChange}
        />
        </div>
    )
}

export default Filter;