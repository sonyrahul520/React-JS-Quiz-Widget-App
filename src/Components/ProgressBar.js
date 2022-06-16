import React from 'react';

const ProgressBar = (props) => {


    const {completed } = props;
    const containerStyles = {
        height: 40,
        width: '50%',
        border:'solid',
        borderColor: 'black',
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: 'rgb(34, 163, 175)',
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        paddingTop: 10,
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
            </div>
        </div>
    );
};


    export default ProgressBar;
   