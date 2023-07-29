import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RootState, store } from '../../app/store';
import { fetchPlacesThunk } from './placesSlice';
import React from 'react';
import Places from './Places';

test('renders places correctly', async () => {
    // Mock the fetchPlacesThunk to return a specific set of places
    const mockPlaces = [
        {
            place_id: 1,
            fullName: 'Place 1',
            description: 'Description 1',
            years: { start: 2000, end: 2010 },
            coords: { lat: 123, lng: 456 },
        },
        {
            place_id: 2,
            fullName: 'Place 2',
            description: 'Description 2',
            years: { start: 2010, end: 2020 },
            coords: { lat: 789, lng: 212 },
        },
    ];
    jest.spyOn(store, 'dispatch').mockImplementation(() => { });
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());

    render(
        <Provider store={store}>
            <Places />
        </Provider>
    );

    // Ensure that the fetchPlacesThunk has been dispatched
    expect(store.dispatch).toHaveBeenCalledWith(fetchPlacesThunk());

    // Ensure that the places are rendered correctly
    expect(screen.getByText('Place 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('2000 - 2010')).toBeInTheDocument();
    expect(screen.getByText('123, 456')).toBeInTheDocument();

    expect(screen.getByText('Place 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('2010 - 2020')).toBeInTheDocument();
    expect(screen.getByText('789, 212')).toBeInTheDocument();
});