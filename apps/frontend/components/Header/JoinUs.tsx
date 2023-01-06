import classNames from 'classnames';
import Button from '../Button';

const JoinUs = (): JSX.Element => {
  return (
    <div className={classNames('flex', 'md:flex-col', 'justify-center', 'items-center')}>
      <span className={classNames('text-sm', 'mb-1', 'mx-2', 'whitespace-nowrap')}>Werde jetzt Mitglied</span>
      <Button href="/docs/bbe-antrag.pdf" download target="_blank" className={classNames('w-full')}>
        Join Us
      </Button>
    </div>
  );
};

export default JoinUs;
