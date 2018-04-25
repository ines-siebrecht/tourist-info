import React from 'react';

import './Museum.css';

const museum = (props) => {
    const weekDays = [
        'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'
    ];

    console.log(props.openingHours);

    const open = Object.keys(props.openingHours).map((key, index) => (
        <span>{weekDays[key]}: {props.openingHours[key].startTime} - {props.openingHours[key].endTime}</span>
    ));

    return (
        <div className="Museum">
            <div className="Museum__content">
            <div className="Museum__header">{props.name}</div>

                <div className="Museum__details">
                    <div className="Museum__openingHours">
                        {open}
                    </div>
                    <address>
                        {props.address.street} {props.address.streetNumber}<br/>
                        {props.address.zipCode} {props.address.city}
                    </address>
                </div>
            </div>
            <div className="Museum__map">
                <a href={props.website} className="Museum__link"><span>→</span></a>
            </div>
        </div>
    )
};

export default museum;
