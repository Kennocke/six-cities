import { Cities } from '../constants';

export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: Cities;
};

export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: Array<string>;
  host: Host;
  id: number;
  images: Array<string>;
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Offers = Offer[];
