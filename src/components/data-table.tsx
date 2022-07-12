import React from 'react';
import styled from 'styled-components';
import { FormattedPlanetData } from '../utils/tools';
import { HiExternalLink } from 'react-icons/hi';

interface planetProps {
  planetData: FormattedPlanetData[];
}

const DataTable: React.FunctionComponent<planetProps> = ({ planetData }: planetProps) => {

  return (
    <Table>
      <thead>
        <tr>
          <HeaderCell>Name</HeaderCell>
          <HeaderCell>Climate</HeaderCell>
          <HeaderCell># of Residents</HeaderCell>
          <HeaderCell>Terrains</HeaderCell>
          <HeaderCell>Population</HeaderCell>
          <HeaderCell>Total Water Surface Area</HeaderCell>
        </tr>
      </thead>
      <tbody>
        {planetData.map(( planet: FormattedPlanetData ) => (
          <tr>
            <DataCell>
              <Link href={planet.url} target="_blank" rel="noopener noreferrer">
                {planet.name} <HiExternalLink/>
                </Link>
            </DataCell>
            <DataCell>{planet.climate}</DataCell>
            <DataCell>{planet.numOfResidents}</DataCell>
            <DataCell>{planet.terrains}</DataCell>
            <DataCell>{planet.population}</DataCell>
            <DataCell>
              {planet.waterSurfaceArea}
              {planet.waterSurfaceArea !== '?' ? 
                <> km<sup>2</sup> </> : <></>
              }
            </DataCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Table = styled.table`
  border-collapse: collapse;
  max-width: 900px;
  width: 100%;
  margin: 3rem auto;
`;

const HeaderCell = styled.th`
  border: 1px solid gray;
  padding: .5rem;
`;

const DataCell = styled.td`
  border: 1px solid gray;
  text-align: center;
  font-size: 70%;
  padding: .5rem;
`;

export default DataTable;
