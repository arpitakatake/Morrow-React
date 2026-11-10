
function FilterTabs({
  currentFilter,
  setCurrentFilter,
  total,
  active,
  completed,
}) {
  const filters = [
    { id: "all", label: "All", count: total },
    { id: "active", label: "To do", count: active },
    { id: "completed", label: "Done", count: completed },
  ];

  return (
    <div className="filters">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={`filter-button ${
            currentFilter === filter.id ? "active" : ""
          }`}
          onClick={() => setCurrentFilter(filter.id)}
        >
          {filter.label}
          <span>{filter.count}</span>
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
