import { createContext, useEffect, useState } from "react";
import featureFlagServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({children}){

    const [loading, setLoading] = useState(false);
    const [enableFlags, setEnableFlags] = useState({});

    async function fetchFeatureFlags(){

        try{

            setLoading(true);

            const response = await featureFlagServiceCall();

            if(response){
                setLoading(false); 
                setEnableFlags(response);
            }

        }catch(error){
            setLoading(false)
            console.log(error)
            throw new Error(error)
        }
    }

    useEffect(()=>{

        fetchFeatureFlags();
    }, []);

    // En el caso real de aplicar esto. En realidad en vez de envolver a este "children", se envolvería lo que es el componente App en el main.jsx
    return (
        <FeatureFlagsContext.Provider value={{loading, enableFlags}}>
            {children}
        </FeatureFlagsContext.Provider>
    );
}