const getSectorLines = () => {
  
}


const renderArena = () => {
  const arenaEL = document.querySelector('.arena');
  const sectorString = [1, 2, 3].map(
    ((sectorNumber) =>
      `
  <div class="sector" data-sector-number= '${sectorNumber}'>${getSectorLines()}
  </div>`).join('')
  );
  arenaEL.innerHTML = sectorString;
};
