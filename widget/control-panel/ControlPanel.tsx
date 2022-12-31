import React from 'react';
import './ControlPanel.css';
import Control, {ControlProps} from "./Control";

export interface ControlPanelProps {
    controls: ControlProps[];
}

export interface ControlPanelInteraction {
    name: string;
    value: string;
}

export interface ControlPanelInteractionProps extends ControlPanelProps {
    onInteraction: (name: string, value: string) => void;
}

const ControlPanel: React.FC<ControlPanelInteractionProps> = (props) => {
    const {controls, onInteraction} = props;

    if (controls.length === 0) {
        return null;
    }

    return (
        <aside className="controls">
            {controls.map((control, i) =>
                <Control
                    key={i}
                    {...control}
                    onControlValueChange={(name: string, value: string) => onInteraction(name, value)}
                />
            )}
        </aside>
    );
}

export default ControlPanel;