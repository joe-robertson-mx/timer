import { ReactElement, createElement, useState, useEffect } from "react";
import { TimeText } from "./components/TimeText";

import { TimerContainerProps } from "../typings/TimerProps";

import "./ui/Timer.css";

export function Timer({ timeAtt, action }: TimerContainerProps): ReactElement {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (time !== undefined) {
            if (time > 0) {
                window.setTimeout(() => setTime(time - 1), 1000);
            } else {
                execAction();
            }
        }
    }, [time]);

    useEffect(() => {
        if (timeAtt.value) {
            setTime(timeAtt.value.toNumber());
        }
    }, [timeAtt]);

    const execAction = () => {
        if (action && action.canExecute) {
            action.execute();
        }
    };

    return <TimeText value={time} />;
}
