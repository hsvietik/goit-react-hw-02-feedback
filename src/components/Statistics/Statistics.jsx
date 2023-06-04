import {
  StyledStatisticsTitle,
  StyledStatisticsItem,
} from './Statistics.styled';
import { Notification } from './Notification';
export const Statistics = ({ statistics, total, positivePercentage }) => {
  return (
    <div>
      <StyledStatisticsTitle> Statistics </StyledStatisticsTitle>
      {total ? (
        <>
          {Object.entries(statistics).map(([key, value], i) => {
            return (
              <StyledStatisticsItem key={i}>
                {key}: {value}
              </StyledStatisticsItem>
            );
          })}
          <StyledStatisticsItem>total: {total}</StyledStatisticsItem>
          <StyledStatisticsItem>
            positive feedback: {positivePercentage || 0}%
          </StyledStatisticsItem>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
