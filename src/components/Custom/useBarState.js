import { useState } from "react";

export default function useBarState(states) {
    const [onFocus, setOnFocus] = useState(states);

    const getActiveState = () => {
        for (const stateItem in onFocus) {
            if (onFocus[stateItem] === true) {
                return stateItem;
            }
        }
    };

    const onFocusHandler = (activeState,currentState) => {
        setOnFocus((prevState) => ({
            ...prevState,
            [activeState]: false,
            [currentState]: true,
        }));
    };

    const onFocusHandlerOneSide = (currentState) => {
        setOnFocus((prevState) => ({
            ...prevState,
            [currentState]: true,
        }));
    };

    return [onFocus, onFocusHandler, getActiveState, onFocusHandlerOneSide];
}
