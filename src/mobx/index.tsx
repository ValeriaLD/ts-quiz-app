import React, { createContext } from "react";
import { IRootStore } from "./interfaces";
import { RootStore } from "./store/RootStore.store";

export const MainStore = RootStore.create({ })

const StoreContext = React.createContext<IRootStore | null>(null); 

export const StoreProvider = (props: any) => {
    return <StoreContext.Provider value = {MainStore} > { props.children } </StoreContext.Provider>
}

export function useRootStore( ): IRootStore {
    
    const store = React.useContext(StoreContext);
    if(!store) {
        throw new Error("Provider is not initalized!");
    }
    return store;
}