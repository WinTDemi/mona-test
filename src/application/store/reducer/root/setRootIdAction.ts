import { RootAction, RootInitialState } from "../../types/rootType";

export const setRootIdAction = (state: RootInitialState, action: RootAction) => {
    state.value.id = action.payload;
}