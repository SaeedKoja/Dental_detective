import React from 'react';
import CaseBox from './CaseBox';

const Requested = () => {
    const data = [
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
        {
            type: 'type of case',
            time: '12/8/2023',
            maxTime: '12/8/2023',
            patient: 'Saeed Koja',
            doctor: 'Hamza Ahmad',
        },
    ]

    return (
        <div>
            {data.map((item, index) => {
                return (
                    <CaseBox item={item} key={index} page={3} />
                )
            })}
        </div>
    );
}

export default Requested;
