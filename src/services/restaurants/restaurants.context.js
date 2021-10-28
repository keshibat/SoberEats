import React, { useState, createContext, UseEffect, UseMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
