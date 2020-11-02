import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityStore from '../../../app/stores/activityStore';

interface DetailParams {
  id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history,
}) => {
  const activityStore = useContext(ActivityStore);
  const { activity, loadActivity, loadingInitial } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if (loadingInitial || !activity)
    return <LoadingComponent content='Loading activity...' />;

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
            as={Link}
            to={`/manage/${activity.id}`}
            basic
            color='blue'
            content='Edit'
          />
          <Button
            onClick={() => history.push('/activities')}
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
