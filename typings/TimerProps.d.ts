/**
 * This file was generated from Timer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface TimerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    timeAtt: EditableValue<Big>;
    action?: ActionValue;
}

export interface TimerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    timeAtt: string;
    action: {} | null;
}
