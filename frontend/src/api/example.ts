// put your GraphQL requests here (in one file or different ones)
import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      emoji
      code
    }
  }
`;

export const GET_COUNTRY_BY_CODE = gql`
query GetCountryByCode($code: String!) {
  country(code: $code) {
    name
    emoji
    code
    continent {
        id  
      name
    }
  }
}
`;

export const GET_CONTINENTS = gql`
  query Continents {
    continents {
      id
      name
    }
  }
`;

export const ADD_COUNTRY_MUTATION = gql`
mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
      name
      code
      emoji
      continent {
        id
        name
      }
    }
  }
`;