import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../api/example";
import CountryCard from "../components/countryCard";
import "../styles/Countries-list.css";

export default function CountriesList() {

  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.countries) return <p>No countries found</p>;


  return (
    <>
      <h2>List of Countries</h2>
      <section className="countries-list">
        {data.countries.map((country: { name: string; emoji: string }) => (
          <CountryCard key={country.name} name={country.name} emoji={country.emoji} />
        ))}
      </section>
    </>
  );
}