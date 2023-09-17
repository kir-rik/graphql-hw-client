import {gql, useQuery } from "@apollo/client";
import type { FC } from "react";

type MapperArguments = {
  id: string;
  name: string;
  description: string;
  photo: string;
};
const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const Client: FC = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(
    ({ id, name, description, photo }: MapperArguments) => (
      <div key={id}>
        <h3>{name}</h3>
        <img
          width="400"
          height="250"
          alt="location-reference"
          src={`${photo}`}
        />
        <br />
        <b>About this location:</b>: Mapper
        <p>{description}</p>
        <br />
      </div>
    )
  );
};
