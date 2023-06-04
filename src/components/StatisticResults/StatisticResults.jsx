import {
  StyledStatisticsTitle,
  StyledStatisticsItem,
} from './StatisticResults.styled';
export const StatisticResults = ({
  statistics,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <StyledStatisticsTitle> Statistics </StyledStatisticsTitle>
      {Object.entries(statistics).map(([key, value], i) => {
        return (
          <StyledStatisticsItem key={i}>
            {key}: {value}
          </StyledStatisticsItem>
        );
      })}
      <StyledStatisticsItem>total: {countTotalFeedback()}</StyledStatisticsItem>
      <StyledStatisticsItem>
        positive feedback: {countPositiveFeedbackPercentage() || 0}%
      </StyledStatisticsItem>
    </div>
  );
};
