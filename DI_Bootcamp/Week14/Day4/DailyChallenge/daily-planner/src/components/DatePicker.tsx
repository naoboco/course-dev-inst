import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../store/plannerSlice";
import type { RootState, AppDispatch } from "../store/store";

function DatePicker() {
  const dispatch = useDispatch<AppDispatch>();

  const selectedDate = useSelector(
    (state: RootState) => state.planner.selectedDate
  );

  return (
    <div>
      <h2>Select a Date</h2>

      <input
        type="date"
        value={selectedDate}
        onChange={event =>
          dispatch(setSelectedDate(event.target.value))
        }
      />
    </div>
  );
}

export default DatePicker;