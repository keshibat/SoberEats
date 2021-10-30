import React, { useState, useEffect, createContext } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("Antwerp");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSerach = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword.toLowerCase());
    locationRequest(searchKeyword)
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: () => null,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
