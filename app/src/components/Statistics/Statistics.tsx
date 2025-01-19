import "./Statistics.scss";

interface IStatisticsProps {
  data: {
    title: string;
    subtitle: string;
  }[];
}

const Statistics = (props: IStatisticsProps) => {
  const { data } = props;

  return (
    <div className="statistics">
      {data.map((item) => {
        return (
          <div className="statistics__item">
            <span className="title">{item.title}</span>
            <span className="subtitle">{item.subtitle}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Statistics;
