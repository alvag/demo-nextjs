import { FC, PropsWithChildren } from 'react';

const DarkLayout: FC<PropsWithChildren<unknown>> = ( { children } ) => {
    return (
        <div style={ {
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '10px',
            borderRadius: '10px'
        } }>
            <h3>DarkLayot</h3>

            <div>
                { children }
            </div>
        </div>
    );
};

export default DarkLayout;
