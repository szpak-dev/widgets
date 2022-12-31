import React from 'react';
import {ControlPanelInteraction} from "../control-panel/ControlPanel";

const ControlPanelContext = React.createContext<ControlPanelInteraction>({
    name: '',
    value: '',
});

interface StageProps {
    component: React.ReactNode;
    lastInteraction: ControlPanelInteraction;
}

const Stage: React.FC<StageProps> = (props) => {
    const {component, lastInteraction} = props;

    return (
        <main>
            <div className={'stage-wrap'}>
                <ControlPanelContext.Provider value={lastInteraction}>
                    {component}
                </ControlPanelContext.Provider>
            </div>
        </main>
    )
}

export {
    Stage,
    ControlPanelContext,
}
