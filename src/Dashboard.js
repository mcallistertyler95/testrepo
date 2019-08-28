import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'


export default class Dashboard extends Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };
render() {
  return (
    <div className="Dashboard">
      <header className="login-header">
      </header>
      <p>
          This is the dashboard
          
        </p>
        <button onClick={() => this.props.history.push('/')}>
            Back to Login
        </button>
    </div>
  );
}
};

export const DashboardRouter = withRouter(Dashboard);