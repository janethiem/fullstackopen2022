const StatisticsLine = ({text, value, unit}) => {
    return (
        <div>{text}: {value} {unit}</div>
    )
}

export default StatisticsLine;