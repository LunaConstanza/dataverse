// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterBySex = (data, option) => {
  return data.filter(character => character.facts.sexo === option);
};

export const sortByName = (data, option) => {
  return data.sort((a, b) => {
    if(option === 'asc'){
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
};

export const sortByYear = (data, option) => {
  return data.sort((a, b) => {
    if(option === 'asc'){
      return a.facts.yearOfBirth - b.facts.yearOfBirth;
    } else {
      return b.facts.yearOfBirth - a.facts.yearOfBirth;
    }
  });
};

export const computeStats = (data) => {
  const year1800 = (data.filter(character => character.facts.yearOfBirth <= 1899).length * 100) / data.length
  console.log(year1800)
  const year1900 = (data.filter(character => character.facts.yearOfBirth >= 1900).length * 100) / data.length
  console.log(year1900)
  return [
    year1800.toFixed(1),
    year1900.toFixed(1)
  ]
}