import React, {useState} from 'react';
import './Widget.css';
import Heading from "./areas/Heading";
import {Stage} from "./areas/Stage";
import ControlPanel, {ControlPanelInteraction, ControlPanelProps} from "./control-panel/ControlPanel";
import ErrorList from "./areas/ErrorList";

interface WidgetProps {
    name: string;
    stage: React.ReactNode;
    controlPanel?: ControlPanelProps;
    errors?: string[];
}

const Widget: React.FC<WidgetProps> = ({
    name,
    stage,
    controlPanel = {controls: []},
    errors = [],
}) => {
    const [interaction, setInteraction] = useState<ControlPanelInteraction>({name: '', value: ''});

    return (
        <React.Fragment>
            <Heading value={name}/>
            <Stage
                component={stage}
                lastInteraction={interaction}
            />
            <footer>
                <ErrorList messages={errors}/>
                <ControlPanel
                    controls={controlPanel.controls}
                    onInteraction={(name: string, value: string) => {
                        setInteraction({name, value});
                    }}
                />
            </footer>
        </React.Fragment>
    );
}

export {
    Widget,
};
