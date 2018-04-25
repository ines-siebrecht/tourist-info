import React, {Component} from 'react';

import Museum from './../../component/Museum/Museum';

class Museums extends Component {
    state = {
        museums: []
    };

    componentDidMount () {
        // request json from server
        // transform it

        const museums = [
            {
                uuid: "6ecaec0c-2967-11e6-bc9c-0050569b7e95",
                name: 'Archäologische Sammlung - Museum im Heinrich Schliemann-Institut',
                address: {
                    street: 'Schwaansche Str.',
                    streetNumber: '3',
                    streetAdditional: null,
                    district: 'Stadtmitte',
                    city: 'Rostock, Hanse- und Universitätsstadt',
                    zipCode: '18055',
                },
                openingHours: {
                    3: {
                        startTime: '16:00',
                        endTime: '18:00',
                    },
                }, accessible: null,
                phone: '+49 381 4982786',
                mail: 'altertumswissenschaften@uni-rostock.de',
                website: 'http://www.altertum.uni-rostock.de/archaeologische-sammlung/',
            },
            {
                uuid: 'af8596dc-19b6-11e5-be85-0050569b7e95',
                name: 'Kulturhistorisches Museum – Kloster zum Heiligen Kreuz',
                address: {
                    street: 'Klosterhof',
                    streetNumber: '7',
                    streetAdditional: null,
                    district: 'Stadtmitte',
                    city: 'Rostock, Hanse- und Universitätsstadt',
                    zipCode: '18055',
                },
                openingHours: {
                    2: {
                        startTime: '10:00',
                        endTime: '18:00',
                    },
                    3: {
                        startTime: '10:00',
                        endTime: '18:00',
                    },
                    4: {
                        startTime: '10:00',
                        endTime: '18:00',
                    },
                },
                accessible: null,
                phone: '+49 381 4982786',
                mail: 'altertumswissenschaften@uni-rostock.de',
                website: 'http://www.altertum.uni-rostock.de/archaeologische-sammlung/',
            },

        ];

        this.setState({museums: museums});
    }

    render () {
        const museums = this.state.museums.filter(mus => {
            if (mus.openingHours[this.props.startDate.getDay()] === undefined) {
                return false;
            }

            const day =  mus.openingHours[this.props.startDate.getDay()];

            return day.startTime.slice(0,2) >= this.props.startDate.getHours()
               && day.endTime.slice(0,2) <= this.props.endDate.getHours()

        }).map((mus) => {

            return (
                <Museum
                    key={mus.uuid}
                    name={mus.name}
                    address={mus.address}
                    link={mus.website}
                    openingHours={mus.openingHours}
                />
            );
            }
        );

        return (
            <div>
                <h3>geöffnete Museen</h3>
                {museums}
            </div>
        )
    }
}

export default Museums;
