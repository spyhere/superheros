import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../redux/redux';
import { connect } from 'react-redux';

function EditComp(props) {
    return (
        <div>
            <h1>EditComp</h1>
        </div>
    )
}

let Edit = connect(mapStateToProps, mapDispatchToProps)(EditComp);

export default Edit;