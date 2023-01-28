import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function CountryDetails(props) {
  const [countryDetail, setCountryDetail] = useState(null);
  const { alpha3Code } = useParams();
  useEffect(() => {
    const countryDetail = props.countries.find(
      (item) => alpha3Code === item.alpha3Code
    );
    setCountryDetail(countryDetail);
  }, [alpha3Code]);
  if (!countryDetail) return <p>Project not Found!</p>;
  return (
    <div key={countryDetail._id}>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`}
      />

      <h3>{countryDetail.name.common}</h3>
      <p>Capital: {countryDetail.capital}</p>
      <p>Area: {countryDetail.area} km²</p>
      <ul>
        Borders:
        {countryDetail.borders.length > 0 ? (
          countryDetail.borders.map((item) => {
            return (
              <li key={item} style={{ listStyle: 'none' }}>
                <ul>
                  <Link to={`/countries/${item}`}>{item}</Link>
                </ul>
              </li>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

export default CountryDetails;
