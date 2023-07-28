import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Place, fetchPlacesThunk } from "./placesSlice";

function Places() {

    const placesState = useAppSelector((state: RootState) => state.places);
    const places = useAppSelector((state: RootState) => state.places.value.places);
    const dispatch = useAppDispatch();

    useEffect(() => {

        if (placesState.status === 'idle') {
            dispatch(fetchPlacesThunk());
        }

        return () => {
            // Cleanup code run when component is removed from page:
        }
    });

    return (
        <div>
            <h1>THIS IS PLACES</h1>
            <>
                {places.map((place: Place) => <div key={place.place_id}>{place.fullName}</div>)}
            </>
        </div>
    );
}

export default Places;
