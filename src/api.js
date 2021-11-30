//LOGICA DE LA API
//BASE URL
const base_url = `https://api.rawg.io/api/`;

//getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
//last year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const popular_games = `games?key=2c65716d045c4099999b8f4255a984a8&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
//upcoming games
const upcoming_games = `games?key=2c65716d045c4099999b8f4255a984a8&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
//new games
const new_games = `games?key=2c65716d045c4099999b8f4255a984a8&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?&key=2c65716d045c4099999b8f4255a984a8`;

//game screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&key=2c65716d045c4099999b8f4255a984a8`;

//searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9?&key=2c65716d045c4099999b8f4255a984a8`;
