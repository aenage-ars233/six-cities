import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers, setOffersDataLoadingStatus, requireAuthorization} from './action';
import {CityName, Offers} from '../types/offers';
import {CITIES, AuthorizationStatus} from '../const';

type OffersState = {
  city: CityName;
  offers: Offers;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState: OffersState = {
  city: CITIES[0].name,
  offers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
