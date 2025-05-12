import { Link } from "react-router-dom";
import "../styles/country-card.css";

type Props = {
  name: string;
  emoji: string;
  code: string;
};

const CountryCard = ({ name, emoji, code }: Props) => {

  return (
    <Link to={`/country/${code}`} className="country-card">
        <h3> {name}, {emoji}</h3>
        <p>Code: {code}</p>
    </Link>
  );
};

export default CountryCard;
