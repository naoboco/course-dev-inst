import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

type CategorySelectorProps = {
  selectedCategoryId: number;
  onCategoryChange: (categoryId: number) => void;
};

function CategorySelector({
  selectedCategoryId,
  onCategoryChange
}: CategorySelectorProps) {
  const categories = useSelector(
    (state: RootState) => state.productivity.categories
  );

  return (
    <div>
      <h2>Categories</h2>

      <select
        value={selectedCategoryId}
        onChange={event =>
          onCategoryChange(Number(event.target.value))
        }
      >
        {categories.map(category => (
          <option
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;