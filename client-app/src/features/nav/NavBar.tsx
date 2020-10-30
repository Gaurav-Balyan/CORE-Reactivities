import React from 'react';
import { Button, Container } from 'semantic-ui-react';

interface IProps {
  openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
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
            onClick={openCreateForm}
            className='positive'
            content='Create Activity'
          />
        </a>
      </Container>
    </div>
  );
};

export default NavBar;
