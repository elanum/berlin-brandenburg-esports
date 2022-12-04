import classNames from 'classnames';
import Button from '../Button';

const JoinUs = (): JSX.Element => {
  return (
    <div className={classNames('flex', 'flex-col')}>
      <span className={classNames('text-sm', 'mb-1')}>Werde jetzt Mitglied</span>
      <Button href="/docs/bbe-antrag.pdf" download target="_blank">
        Join Us
      </Button>
    </div>
  );
};

export default JoinUs;
