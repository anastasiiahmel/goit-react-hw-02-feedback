import { StatisticStyle } from "./Statistic.styled";

export const Statistics = ({good, neutral, bad, total, count}) => {
    return (
        <StatisticStyle>

            <li className="statistic-text">Good: {good}</li>
            <li className="statistic-text">Neutral: {neutral}</li>
            <li className="statistic-text">Bad: {bad}</li>
            <li className="statistic-text">Total: {total}</li>
            <li className="statistic-text">Positive feedback: {count.toFixed(0)}%</li>
      </StatisticStyle>
    )
};