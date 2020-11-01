import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Container } from 'semantic-ui-react';
import ActivityStore from '../../app//stores/activityStore';

const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  return (
    <div className='ui inverted top fixed menu'>
      <Container>
        <a className='item header'>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '10px' }}
          />
          Reactivities
        </a>
        <a className='item'>Activities</a>
        <a className='item'>
          <Button
            onClick={activityStore.openCreateForm}
            className='positive'
            content='Create Activity'
          />
        </a>
      </Container>
    </div>
  );
};

export default observer(NavBar);
