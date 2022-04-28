import StatisticsLine from "./StatisticsLine";
import { 
    goodString,
    neutralString,
    badString,
    totalString, 
    averageScoreString,
    positiveFeedbackString,
    noFeedbackString,
} from "./Strings";

const Statistics = ({good, neutral, bad}) => {

    const totalFeedbackCount = () => (good + neutral + bad);
    
    /**
      Returns the average score, 
      where good = 1 point, neutral = 0 points, and bad = -1 points.
    */
    const averageFeedbackScore = () => {
      const divisor = totalFeedbackCount();
      return (divisor !== 0 ? ((good - bad) / divisor) : 0);
    }
    const percentagePositiveFeedback = () => {
      const divisor = totalFeedbackCount();
      return (divisor !== 0 ? (good / divisor * 100) : 0)
    };
  
    return (totalFeedbackCount() === 0
        ? <>{noFeedbackString}</>
        : (
            <>
            <StatisticsLine text={goodString} value={good} />
            <StatisticsLine text={neutralString} value={neutral} />
            <StatisticsLine text={badString} value={bad} />
            <StatisticsLine text={totalString} value={totalFeedbackCount()} />
            <StatisticsLine text={averageScoreString} value={averageFeedbackScore()} />
            <StatisticsLine text={positiveFeedbackString} value={percentagePositiveFeedback()} unit='%'/>
            </>
        )
    );
  }

  export default Statistics;