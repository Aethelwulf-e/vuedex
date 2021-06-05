class ColorPicker {

  CardColors = {
    "bug": "#A8B820",
    "dark": "#705848",
    "electric": "#F8D030",
    "fairy": "#EE99AC",
    "dragon": "#7038F8",
    "fighting": "#C03028",
    "fire": "#F08030",
    "flying": "#A890F0",
    "ghost": "#705898",
    "grass": "#78C850",
    "ground": "#E0C068",
    "ice": "#98D8D8",
    "normal": "#A8A878",
    "poison": "#A040A0",
    "psychic": "#F85888",
    "rock": "#B8A038",
    "steel": "#B8B8D0",
    "water": "#6890F0"
  }

  ChipsColors = {
    "bug": "#C6D16E",
    "dark": "#49392F",
    "electric": "#A1871F",
    "fairy": "#9B6470",
    "dragon": "#4924A1",
    "fighting": "#7D1F1A",
    "fire": "#9C531F",
    "flying": "#C6B7F5",
    "ghost": "#493963",
    "grass": "#4E8234",
    "ground": "#927D44",
    "ice": "#BCE6E6",
    "normal": "#C6C6A7",
    "poison": "#682A68",
    "psychic": "#FA92B2",
    "rock": "#786824",
    "steel": "#D1D1E0",
    "water": "#9DB7F5"
  }

  getCardColorByType(type) {
    return this.CardColors[type];
  }

  getChipColorByType(type) {
    return this.ChipsColors[type];
  }
}

export default new ColorPicker()