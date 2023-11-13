export const renderItems = (data) => {
  const list = document.createElement('ul')
  data.forEach(character => {
    const card = document.createElement('li');
    card.setAttribute("itemscope","");
    card.setAttribute("itemtype", "characterScout")
    card.innerHTML += `
      <img src="${character.imageUrl}" alt="Fotografía de ${character.name}">
      <h2 itemprop="name">${character.name}</h2>
      <p itemprop="yearOfBirth">${character.facts.yearOfBirth}</p>
      <p itemprop="mainPosition">${character.facts.mainPosition}</p>
    `
    list.appendChild(card)
  });
  return list
};

