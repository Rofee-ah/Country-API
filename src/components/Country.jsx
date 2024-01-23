import { React, useState } from 'react';
import data from '../rest-countries-api-with-color-theme-switcher-master/data.json';
import './Country.css';

const Country = () => {
    const [Country, setCountry] = useState(data)
  const [selectedOption, setSelectedOption] = useState('');
  const [select, setSelect] = useState('');
  const continent = [
    'Asia',
    'Europe',
    'Americas',
    'Polar',
    'Oceania',
    'Antarctic Ocean',
    'Africa',
  ];

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
console.log(data)
  const foundRegion = Country.filter((item) => item.region === selectedOption);


  const handleChanged = (e) => {
    setSelect(e.target.value);
    const searchItem = Country.filter((product) => {
      const { name } = product;
      return name.toLowerCase().includes(select.toLowerCase())
    })

    // console.log(searchItem);
    setCountry(searchItem)
    
}

  return (
    <div>
      <div className='nav'>
        {select}
        <input type="text" placeholder='SEARCH-REGION'  className='inp' onChange={(e) => handleChanged(e)}/>
        <select
          name='continent'
          value={selectedOption}
          onChange={(e) => handleChange(e)}>
          <option>Continent</option>
          {continent.map((option) => (
            <option key={option[0]}>{option}</option>
          ))}
        </select>
      </div>
      
      <div className='containerStyles'>
        {foundRegion.length > 0
          ? foundRegion.map((Country) => {
              return (
                <div className='div1' key={Country.name}>
                  <h4>{Country.name}</h4>
                  {/* <h4>{data.nativeName}</h4> */}
                  <h6>{Country.region}</h6>
                  <h6>{Country.population}</h6>
                  {/* <h6>{data.region}</h6> */}
                  <img className='img' src={Country.flags.svg} />
                </div>
              );
            })
          : Country.map((Country) => {
              return (
                <div className='div1' key={Country.name}>
                  <h4>{Country.name}</h4>
                  {/* <h4>{data.nativeName}</h4> */}
                  <h6>{Country.region}</h6>
                  <h6>{Country.population}</h6>
                  {/* <h6>{data.region}</h6> */}
                  <img className='img' src={Country.flags.svg} />
                </div>
              );
            })}
      </div>
    </div>
  );
};


export default Country;
