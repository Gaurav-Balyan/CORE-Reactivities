import React, { SyntheticEvent } from 'react';
import { Button, Label, Segment } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  deleteActivity: (e: SyntheticEvent<HTMLButtonElement>, id: string) => void;
  submitting: boolean;
  target: string;
}

const ActivityList: React.FC<IProps> = ({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
  target,
}) => {
  return (
    <Segment clearing>
      <div className='ui items divided'>
        {activities.map((activity) => (
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

export default ActivityList;
