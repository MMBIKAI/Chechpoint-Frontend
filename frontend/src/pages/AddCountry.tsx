import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_COUNTRY_MUTATION } from "../api/example";
import { useNavigate } from "react-router-dom";
import { GET_CONTINENTS } from "../api/example"; 
import "../styles/addCountry.css";

export default function AddCountryPage() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: "",
    code: "",
    emoji: "",
    continent: ""
  });

  const [addCountry] = useMutation(ADD_COUNTRY_MUTATION, {
    update(cache, { data: { addCountry } }) {
      cache.modify({
        fields: {
          countries(existingCountries = []) {
            return [...existingCountries, addCountry];
          }
        }
      });
    },
    onCompleted: () => navigate("/list")
  });

  const { data: continentsData } = useQuery(GET_CONTINENTS);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCountry({
      variables: {
        data: {
          ...formState,
          continent: formState.continent 
          ? { id: parseInt(formState.continent) } 
          : null
        }
      }
    });
  };

  return (
    <div className="form-container">
      <h2>Add New Country</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={formState.name}
            onChange={(e) => setFormState({...formState, name: e.target.value})}
            required
            minLength={2}
            maxLength={50}
          />
        </div>

        <div className="form-group">
          <label>Code:</label>
          <input
            type="text"
            value={formState.code}
            onChange={(e) => setFormState({...formState, code: e.target.value.toUpperCase()})}
            required
            minLength={2}
            maxLength={3}
            pattern="[A-Za-z]{2,3}"
          />
        </div>

        <div className="form-group">
          <label>Emoji:</label>
          <input
            type="text"
            value={formState.emoji}
            onChange={(e) => setFormState({...formState, emoji: e.target.value})}
            required
            maxLength={4}
          />
        </div>

        <div className="form-group">
          <label>Continent:</label>
          <select
            value={formState.continent}
            onChange={(e) => setFormState({...formState, continent: e.target.value})}
            >
            <option value="">Select Continent</option>
            {continentsData?.continents.map((continent: { id: number; name: string }) => (
                <option key={continent.id} value={continent.id}>
                {continent.name}
                </option>
            ))}
            </select>
        </div>

        <button type="submit" className="submit-button">
          Add Country
        </button>
      </form>
    </div>
  );
}