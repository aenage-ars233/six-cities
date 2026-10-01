import {createAction} from '@reduxjs/toolkit';
import {Offers, CityName} from '../types/offers';
import {AuthorizationStatus} from '../const';

export const setCity = createAction<CityName>('offers/setCity');

export const setOffers = createAction<Offers>('data/setOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
