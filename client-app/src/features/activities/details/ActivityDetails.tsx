import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import ActivityStore from '../../../app/stores/activityStore';

const ActivityDetails: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const {
    selectedActivity: activity,
    openEditForm,
    cancelSelectedActivity,
  } = activityStore;
  return (
    <div className='ui card fluid'>
      <div className='image'>
        <img src={`/assets/${activity!.category}.jpg`} />
      </div>
      <div className='content'>
        <a className='header'>{activity!.title}</a>
        <div className='meta'>
          <span className='date'>{activity!.date}</span>
        </div>
        <div className='description'>{activity!.description}</div>
      </div>
      <div className='extra content'>
        <Button.Group widths={2}>
          <Button
            onClick={() => openEditForm(activity!.id)}
            basic
            color='blue'
            content='Edit'
          />
          <Button
            onClick={() => {
              cancelSelectedActivity();
            }}
            basic
            color='grey'
            content='Cancel'
          />
        </Button.Group>
      </div>
    </div>
  );
};

export default observer(ActivityDetails);
