import React, { createContext } from "react";
import all_product from "../../assets/all_product";

export const CategoriesContext = createContext(null);

const CategoriesContextProvider = (props) => {

    const ContextValue = {all_product};

    return(
        <CategoriesContext.Provider value={ContextValue}>
            {props.children}
            </CategoriesContext.Provider>
    )
}
export default CategoriesContextProvider