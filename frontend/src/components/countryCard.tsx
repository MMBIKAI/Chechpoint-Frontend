import "../styles/Countries-list.css"

type Props = {
    name: string;
    emoji: string;
  };
  
  const CountryCard = ({ name, emoji }: Props) => {
    return (
      <div className="country-card">
        <h3>{emoji} {name}</h3>
      </div>
    );
  };
  
  export default CountryCard;