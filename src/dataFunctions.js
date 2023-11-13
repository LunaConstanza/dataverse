// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterSex = (data, option) => {
  return data.filter(character => character.facts.sexo === option);
};

export const orderAlphabetic = (data, option) => {
  return data.sort((a, b) => {
    if(option === 'asc'){
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
};
