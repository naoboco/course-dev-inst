import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  editCategory,
  deleteCategory
} from "../store/productivitySlice";
import type { RootState, AppDispatch } from "../store/store";

function CategoryManager() {
  const dispatch = useDispatch<AppDispatch>();

  const categories = useSelector(
    (state: RootState) => state.productivity.categories
  );

  const [newCategory, setNewCategory] = useState<string>("");
  const [editingCategoryId, setEditingCategoryId] =
    useState<number | null>(null);
  const [editName, setEditName] = useState<string>("");

  const handleAdd = () => {
    if (!newCategory.trim()) {
      return;
    }

    dispatch(addCategory(newCategory.trim()));
    setNewCategory("");
  };

  const startEditing = (id: number, name: string) => {
    setEditingCategoryId(id);
    setEditName(name);
  };

  const saveEdit = () => {
    if (editingCategoryId === null || !editName.trim()) {
      return;
    }

    dispatch(
      editCategory({
        id: editingCategoryId,
        name: editName.trim()
      })
    );

    setEditingCategoryId(null);
    setEditName("");
  };

  return (
    <div>
      <h2>Manage Categories</h2>

      <input
        type="text"
        placeholder="New category"
        value={newCategory}
        onChange={event =>
          setNewCategory(event.target.value)
        }
      />

      <button onClick={handleAdd}>
        Add Category
      </button>

      {categories.map(category => (
        <div key={category.id}>
          {editingCategoryId === category.id ? (
            <>
              <input
                type="text"
                value={editName}
                onChange={event =>
                  setEditName(event.target.value)
                }
              />

              <button onClick={saveEdit}>
                Save
              </button>

              <button
                onClick={() =>
                  setEditingCategoryId(null)
                }
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <span>{category.name}</span>

              <button
                onClick={() =>
                  startEditing(
                    category.id,
                    category.name
                  )
                }
              >
                Edit
              </button>

              <button
                onClick={() =>
                  dispatch(deleteCategory(category.id))
                }
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default CategoryManager;