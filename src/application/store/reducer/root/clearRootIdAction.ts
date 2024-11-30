import { RootInitialState } from "../../types/rootType"

export const clearRootIdAction = (state: RootInitialState) => {
    state.value.id = 0
}