import React, { useReducer } from "react";
import alertReducer from "./alertReducer";
import AlertContext from "./alertContext";

const AlertState = (props) => {
    const initialState = null;

    const [state, dispatch] = useReducer(alertReducer, initialState);

    const showAlert = (msg, type) => { //setAlert çakışması olmasın diye showAlert olarak değiştirildi.
        dispatch({
            type: "SHOW_ALERT",
            payload: {msg, type}
        })

        setTimeout(() => {
            dispatch({
                type: "HIDE_ALERT"
            })
        }, 1000)
    }

    return <AlertContext.Provider
        value={{
            alert: state,
            showAlert
        }}>
        {props.children}
    </AlertContext.Provider>

}

export default AlertState