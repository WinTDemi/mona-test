export interface RootInitialState {
    value: {
        id: number;
    }
}

export interface RootAction {
    type: string;
    payload: number;
}