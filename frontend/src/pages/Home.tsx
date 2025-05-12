import "../styles/homepage.css";

export function HomePage() {
  return (
    <div className="home-container">
    <h1 className="home-title">Welcome to the Countries Finder!</h1>
    <p className="home-description">
      This is a simple React application to search for countries.
    </p>
    <p className="home-description">
      It uses Apollo Client to fetch data from a GraphQL API.
    </p>
    <p className="home-description">
      Click on the link above to see the list of countries.
    </p>
  </div>
  );
}