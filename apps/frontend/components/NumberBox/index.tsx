import classNames from 'classnames';

interface Props {
  amount: number;
  hasMore?: boolean;
  label: string;
}

const NumberBox = ({ amount, hasMore, label }: Props): JSX.Element => (
  <div className={classNames('flex', 'flex-col', 'justify-center', 'items-center')}>
    <div className={classNames('text-2xl', 'text-primary-500', 'font-semibold')}>
      {amount}
      {hasMore && '+'}
    </div>
    <div className={classNames('text-black', 'text-lg')}>{label}</div>
  </div>
);

export default NumberBox;
