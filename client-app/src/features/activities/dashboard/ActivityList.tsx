import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Label, Segment } from 'semantic-ui-react';
import ActivityStore from '../../../app/stores/activityStore';

const ActivityList: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const {
    activitiesByDate,
    selectActivity,
    deleteActivity,
    submitting,
    target,
  } = activityStore;
  return (
    <Segment clearing>
      <div className='ui items divided'>
        {activitiesByDate.map((activity) => (
          <div className='item' key={activity.id}>
            <div className='content'>
              <a className='header'>{activity.title}</a>
              <div className='meta'>
                <span>{activity.date}</span>
              </div>
              <div className='description'>
                <p>{activity.description}</p>
                <p>
                  {activity.city}, {activity.venue}
                </p>
              </div>
              <div className='extra'>
                <Button
                  onClick={() => selectActivity(activity.id)}
                  floated='right'
                  content='View'
                  color='blue'
                />
                <Button
                  name={activity.id}
                  loading={target === activity.id && submitting}
                  onClick={(e) => deleteActivity(e, activity.id)}
                  floated='right'
                  content='Delete'
                  color='red'
                />
                <Label basic content={activity.category} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Segment>
  );
};

export default observer(ActivityList);
