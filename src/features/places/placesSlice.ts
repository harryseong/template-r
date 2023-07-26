import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlacesAPI } from "../../common/api/places";


export interface Years {
    start: number;
    end: number;
}
export interface Coords {
    lat: number;
    lng: number;
}
export interface Place {
    place_id: number;
    order: number;
    displayName: string;
    fullName: string;
    description: string;
    years: Years;
    coords: Coords;
}

export interface PlacesState {
    value: {
        places: Place[],
    }
    status: 'idle' | 'loading' | 'success' | 'failure';
    error: string
}

const initialState: PlacesState = {
    value: {
        places: [],
    },
    status: 'idle',
    error: ''
}

export const fetchPlacesThunk = createAsyncThunk('places/fetchPlaces', () => {
    return PlacesAPI.getAll();
});

export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        setPlaces: (state, action: PayloadAction<Place[]>) => {
            state.value.places = action.payload;
            state.status = 'success';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlacesThunk.pending, state => {
            state.status = 'loading';
        })
        builder.addCase(fetchPlacesThunk.fulfilled, (state, action) => {
            const places = action.payload.data.sort((a: Place, b: Place) => a.order - b.order);
            state.value.places = places;
            state.error = '';
            state.status = 'success';
        })
        builder.addCase(fetchPlacesThunk.rejected, (state, action) => {
            state.value.places = [];
            state.error = JSON.stringify(action.error.message);
            state.status = 'failure';
        })
    }
});

export const { setPlaces } = placesSlice.actions;

export default placesSlice.reducer;
