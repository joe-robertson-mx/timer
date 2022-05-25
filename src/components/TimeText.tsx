import { ReactElement, createElement } from "react";

export interface TimeTextProps {
    value: number | undefined;
}

export function TimeText({ value }: TimeTextProps): ReactElement {
    return value ? <div>{value} seconds</div> : <div>Loading</div>;
}
