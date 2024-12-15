const CategoryTabs = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8 border-b-2 py-16 border-[#272424] ">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 border border-[#272424] rounded text-sm font-medium ${
            selectedCategory === category
              ? 'bg-[#FF938C] text-white border-0'
              : ' text-[#4F4444]'
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
