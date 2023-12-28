"use client";
const { createStore } = require("rc-state");

const appStore = createStore({
    state: {
        name: "Demo App",
    },
    selector: {
        useName: (state) => state.name,
    },
    actions: {
        setName: (state, name) => ({ ...state, name }),
    },
});

export default appStore;

export const AppStoreProvider = appStore.Provider;
