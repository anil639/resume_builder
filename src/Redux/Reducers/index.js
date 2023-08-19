import SelectTemplateReducer from "./SelectTemplateReducer";
import UpdateInfoReducer from "./UpdateInfoReducer";
import UpdateWorkReducer from "./UpdateWorkReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  Select_template: SelectTemplateReducer,
  Update_info: UpdateInfoReducer,
  Update_work: UpdateWorkReducer,
});

export default RootReducer;
