export const useGeolocation = () => {
    const currentPosition = async () => {
        let lat = null;
        let lng = null;

        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        lat = pos.coords.latitude;
        lng = pos.coords.longitude;

        return { lat, lng };
    };

    return {
        currentPosition,
    };
};
