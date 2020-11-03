import React, { useContext } from 'react';
import { Button, Icon, Image, Item, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import ActivityStore from '../../../app/stores/activityStore';
import { IActivity } from '../../../app/models/activity';

const ActivityListItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  const activityStore = useContext(ActivityStore);
  const { deleteActivity, submitting, target } = activityStore;
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <div className='item'>
            <div className='item'>
              <Image size='tiny' circular src='/assets/user.png' />
            </div>
            <div className='content'>
              <a className='header'>{activity.title}</a>
              <div className='description'>Hosted by John</div>
            </div>
          </div>
        </Item.Group>
      </Segment>
      <Segment>
        <Icon name='clock' /> {activity.date}
        <Icon name='clock' /> {activity.venue} {activity.city}
      </Segment>
      <Segment secondary>Attendees will go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated='right'
          content='View'
          color='blue'
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;
