import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Header } from 'semantic-ui-react';
import JobGrid from './JobGrid';

const CharTabs = props => {
  const { charInfo } = props;
  const panes = [
    {
      menuItem: 'Jobs',
      render: () => (
        <Tab.Pane attached={false} style={{ maxHeight: '630px', overflow: 'auto' }}>
          <Header as="h2" color="teal">
            Job Details
          </Header>
          <JobGrid charInfo={charInfo} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Free Company',
      render: () => (
        <Tab.Pane attached={false}>
          <Header as="h2" color="teal">
            Company Details
          </Header>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Minions/Mounts',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
  ];
  return <Tab menu={{ color: 'teal', secondary: true, pointing: true }} panes={panes} />;
};

CharTabs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  charInfo: PropTypes.object.isRequired,
};

export default CharTabs;
