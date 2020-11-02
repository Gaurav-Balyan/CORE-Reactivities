import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';

const NavBar: React.FC = () => {
  return (
    <div className='ui inverted top fixed menu'>
      <Container>
        <NavLink exact to='/' className='item header'>
          <img
            src='/assets/logo.png'
            alt='logo'
            style={{ marginRight: '10px' }}
          />
          Reactivities
        </NavLink>
        <NavLink to='/activities' className='item'>
          Activities
        </NavLink>
        <NavLink to='/createActivity' className='item'>
          <Button className='positive' content='Create Activity' />
        </NavLink>
      </Container>
    </div>
  );
};

export default observer(NavBar);
