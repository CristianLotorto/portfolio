import "./work-card.css";

interface Item {
  company: string,
  designation: string,
  dateJoining: string,
  dateEnd: string,
  companyLogo: string,
  work: string
}

interface Props {
  item: Item
}

const WorkCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="work-card">
      <img src={item.companyLogo}className="work-logo" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;