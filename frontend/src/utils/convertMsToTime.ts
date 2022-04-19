const convertMsToTime = (milliseconds: number): string => {
    const totalSeconds = milliseconds / 1000;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString();
    const seconds = Math.round((totalSeconds % 3600) % 60).toString();
    
    if (hours > 0) {
        return `${hours}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
    } else {
        return `${minutes}:${seconds.padStart(2, "0")}`;
    }
};

export default convertMsToTime;