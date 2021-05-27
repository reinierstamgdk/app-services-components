/**
 * This file was generated from Countdowntimerwidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, EditableValue } from "mendix";

export interface CountdowntimerwidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    incomingDate: EditableValue<Date>;
    whenDone?: ActionValue;
    content?: ReactNode;
    showDays: boolean;
    showHours: boolean;
    showMinutes: boolean;
    showSeconds: boolean;
    showMilliseconds: boolean;
    showLegends: boolean;
}

export interface CountdowntimerwidgetPreviewProps {
    class: string;
    style: string;
    incomingDate: string;
    whenDone: {} | null;
    content: { widgetCount: number; renderer: ComponentType };
    showDays: boolean;
    showHours: boolean;
    showMinutes: boolean;
    showSeconds: boolean;
    showMilliseconds: boolean;
    showLegends: boolean;
}