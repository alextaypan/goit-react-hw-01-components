import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
