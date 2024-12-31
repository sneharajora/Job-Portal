import {createContext} from "react";

export const AppContext =createContext()

export const AppcontextProvider = (props) =>{
     const value ={

     }
}

return (<AppContext.Provider  value={value}>
    {props.children}
</AppContext.Provider>

)