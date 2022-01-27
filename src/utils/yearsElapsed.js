const yearsElapsed = (startDate) => {
    // Calculate milliseconds in a year
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    return Math.round((Date.now() / year) - (new Date(startDate).getTime() / year));
}

export default yearsElapsed;