/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { connectRouter } from "connected-react-router";
import history from "./history.js";

const projectEditorReducer = (state = false, action) => {
	switch (action.type) {
		case "OPEN_PROJECT_EDITOR":
			return true;
		case "CLOSE_PROJECT_EDITOR":
			return false;
		default:
			return state;
	}
};

const featureTypeEditStateReducer = (state = null, action) => {
	switch (action.type) {
		case "OPEN_FEATURE_TYPE_EDITOR":
			return action.payload;
		case "CLOSE_FEATURE_TYPE_EDITOR":
			return null;
		default:
			return state;
	}
};

const selectProjectIdReducer = (state = null, action) => {
	if (action.type === "SELECT_PROJECT") {
		return action.projectId;
	}
	return state;
}

const rootReducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	projectEditorOpen: projectEditorReducer,
	featureTypeEditState: featureTypeEditStateReducer,
	selectedProjectId: selectProjectIdReducer,
});

export default connectRouter(history)(rootReducer);
