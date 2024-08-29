export const useGeolocation = () => {
    const currentPosition = async () => {
        let lat = null;
        let lng = null;
        let msgError = null;

        try {
            const pos = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            lat = pos.coords.latitude;
            lng = pos.coords.longitude;
        } catch (error) {
            msgError = error.message;
        }

        return { lat, lng, msgError };
    };

    return {
        currentPosition,
    };
};
