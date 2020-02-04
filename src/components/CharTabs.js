import React from 'react';
import { Tab } from 'semantic-ui-react';

const panes = [
  {
    menuItem: 'Jobs',
    render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: 'Free Company',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Minions/Mounts',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];

const CharTabs = () => {
  return <Tab menu={{ color: 'teal', secondary: true, pointing: true }} panes={panes} />;
};

export default CharTabs;
