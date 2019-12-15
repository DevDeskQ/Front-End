import React from 'react';
import { connect } from 'react-redux';

function StudentDashboard({ info }) {

    console.log(info);
    return (
        <div>
            hey you guys
        </div>
    )
}

const mapDispatchToProps = {

};

function mapStateToProps(state) {
    return {
        info: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);

