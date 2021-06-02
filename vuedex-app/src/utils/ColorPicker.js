class ColorPicker {
  getCardColorByType(type) {
    if (type == 'bug') {
      return "#A8B820"
    }
    if (type == 'dark') {
      return "#705848"
    }
    if (type == 'electric') {
      return "#F8D030"
    }
    if (type == 'fairy') {
      return "#EE99AC"
    }
    if (type == 'dragon') {
      return "#7038F8"
    }
    if (type == 'fighting') {
      return "#C03028"
    }
    if (type == 'fire') {
      return "#F08030"
    }
    if (type == 'flying') {
      return "#A890F0"
    }
    if (type == 'ghost') {
      return "#705898"
    }
    if (type == 'grass') {
      return "#78C850"
    }
    if (type == 'ground') {
      return "#E0C068"
    }
    if (type == 'ice') {
      return "#98D8D8"
    }
    if (type == 'normal') {
      return "#A8A878"
    }
    if (type == 'poison') {
      return "#A040A0"
    }
    if (type == 'psychic') {
      return "#F85888"
    }
    if (type == 'rock') {
      return "#B8A038"
    }
    if (type == 'steel') {
      return "#B8B8D0"
    }
    if (type == 'water') {
      return "#6890F0"
    }
  }

  getChipColorByType(type) {
    if (type == 'bug') {
      return "#C6D16E"
    }
    if (type == 'dark') {
      return "#49392F"
    }
    if (type == 'electric') {
      return "#A1871F"
    }
    if (type == 'fairy') {
      return "#9B6470"
    }
    if (type == 'dragon') {
      return "#4924A1"
    }
    if (type == 'fighting') {
      return "#7D1F1A"
    }
    if (type == 'fire') {
      return "#9C531F"
    }
    if (type == 'flying') {
      return "#C6B7F5"
    }
    if (type == 'ghost') {
      return "#493963"
    }
    if (type == 'grass') {
      return "#4E8234"
    }
    if (type == 'ground') {
      return "#927D44"
    }
    if (type == 'ice') {
      return "#BCE6E6"
    }
    if (type == 'normal') {
      return "#C6C6A7"
    }
    if (type == 'poison') {
      return "#682A68"
    }
    if (type == 'psychic') {
      return "#FA92B2"
    }
    if (type == 'rock') {
      return "#786824"
    }
    if (type == 'steel') {
      return "#D1D1E0"
    }
    if (type == 'water') {
      return "#9DB7F5"
    }
  }
}

export default new ColorPicker()