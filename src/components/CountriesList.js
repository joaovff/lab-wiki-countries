import { Link } from 'react-router-dom';
function CountriesList(props) {
  return (
    <div>
      <div className="countries-list">
        {props.countries.map((item) => {
          return (
            <div className="countries-card">
              <br />
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`}
              />
              <p key={item._id}>
                <Link key={item._id} to={`/countries/${item.alpha3Code}`}>
                  {item.name.common}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
