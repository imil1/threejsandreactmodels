import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,

} from 'react-simple-maps';

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-10.0, -52.0, 0],
                center: [-5, -3],
                scale: 1600,
            }}
            style={{ width: '100%', height: '100%' }}>
            <Geographies
                geography="/features.json"
                fill="#0d0d24"
                stroke="#e90000"
                strokeWidth={0.5}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                        />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[2.3522, 48.8566]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: '#fd0000',
                    strokeWidth: 2,
                    strokeLinecap: 'round',
                }}>
                <text
                    x="-8"
                    textAnchor="end"
                    alignmentBaseline="middle"
                    fill="#fd0000">
                    {'We are in Paris'}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default Map;
