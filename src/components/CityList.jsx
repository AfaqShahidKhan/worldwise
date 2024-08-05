import React from "react";
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from './Message'
export default function CityList({ cities, isLoading  }) {
  if (isLoading) return <Spinner />;
  if(!cities) return <Message message = 'Add your first city on map' />
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
