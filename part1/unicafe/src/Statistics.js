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
            <div>{goodString}: {good}</div>
            <div>{neutralString}: {neutral}</div>
            <div>{badString}: {bad}</div>
            <div>{totalString}: {totalFeedbackCount()}</div>
            <div>{averageScoreString}: {averageFeedbackScore()}</div>
            <div>{positiveFeedbackString}: {percentagePositiveFeedback()}%</div>
            </>
        )
    );
  }

  export default Statistics;