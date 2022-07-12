import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import styled from 'styled-components';

import { FormattedPlanetData, formatPlanets } from './utils/tools';
import DataTable from './components/data-table';
import ErrorMessage from './components/error-component';
import LoadingMessage from './components/loading-component';


function App(): React.ReactElement {
  const [planetData, setPlanetData] = useState<FormattedPlanetData[]>([]);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    axios('https://swapi.dev/api/planets/')
      .then((res) => {
        const planets = formatPlanets(res.data.results);
        
        setPlanetData(planets);
      })
      .catch((error) => setError(error));
  }, []);
  
  return (
    <>
      
      {error ? 
        <ErrorMessage error={error}/> :
          planetData.length ? 
            <>
              <Title>Planetary Information Center</Title>
              <DataTable planetData={planetData} />
            </> :
            <LoadingMessage/>
      }
    </>
  );
};

const Title = styled.h1`
  text-align: center;
  margin: 1em auto;
`;

export default App;
