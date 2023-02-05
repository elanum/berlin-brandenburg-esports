import classNames from 'classnames';
import BaseTemplate from '../templates/BaseTemplate';

const NotFoundPage = (): JSX.Element => {
  return (
    <BaseTemplate noindex title="Seite nicht gefunden" className={classNames('grid', 'place-items-center', 'h-full')}>
      <div className={classNames('text-4xl', 'text-white', 'text-center')}>
        <code>404</code>
        <div className={classNames('mt-2', 'text-3xl')}>Seite nicht gefunden</div>
      </div>
    </BaseTemplate>
  );
};

export default NotFoundPage;
