import React from 'react';

const FilterComponent = ({ uniqueCategories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="d-flex justify-content-center mb-3">
      {uniqueCategories.map(category => (
        <button
          key={category}
          className={`btn mx-2 ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;
