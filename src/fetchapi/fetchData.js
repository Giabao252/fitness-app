export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "83c5b9665amsh7554309443e120ep1ef42ejsn4b38fba19cdf",
    //"X-RapidAPI-Key": process.env.RAPID_API_KEY
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "33561bcd16msh0205a9d8820c086p196a19jsna18ff7e99541"
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
