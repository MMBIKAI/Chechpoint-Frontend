import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_BY_CODE } from "../api/example";
import"../styles/countryDetails.css";

const CountryDetailsPage = () => {
  const { code } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { code },
  });

  console.log("Code:", code);
  console.log("Data:", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.country) return <p>Country not found.</p>;

  const { name, emoji, code: countryCode, continent } = data.country;

  return (
    <div>
      <h2 className="country-details-title"> {name}</h2>
      <section className="country-details">
        <div className="country-details-info">
          <p><strong>Code:</strong> {countryCode}</p>
          {continent?.name && (
            <p><strong>Continent:</strong> {continent.name}</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default CountryDetailsPage;