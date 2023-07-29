import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Place, fetchPlacesThunk } from "./placesSlice";

function Places() {

    const placesState = useAppSelector((state: RootState) => state.places);
    const places = [...placesState.value.places];
    const dispatch = useAppDispatch();

    useEffect(() => {

        if (placesState.status === 'idle') {
            dispatch(fetchPlacesThunk());
        }

        return () => {
            // Cleanup code run when component is removed from page:
        }
    }, [dispatch, placesState]);

    const renderPlaces = () => {
        return (
            <>
                {places.map((place: Place) =>
                    <div key={place.place_id}>
                        <div>{place.fullName}</div>
                        <div>{place.description}</div>
                        <div>{place.years.start} - {place.years.end}</div>
                        <div>{place.coords.lat}, {place.coords.lng}</div>
                    </div>)
                }
            </>
        );
    }

    return (
        <div>
            <h1>THIS IS PLACES</h1>
            {renderPlaces()}
        </div>
    );
}

export default Places;
