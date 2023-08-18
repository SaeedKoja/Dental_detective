import React from 'react';
import CaseBox from './CaseBox';

const Refuzed = () => {
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
                    <CaseBox item={item} key={index} page={4} />
                )
            })}
        </div>
    );
}

export default Refuzed;
