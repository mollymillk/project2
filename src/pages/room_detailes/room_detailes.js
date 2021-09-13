const dataset = [
    {
        value: 50,
        color: 'linear-gradient(180deg, #FFE39C 0%, #FFBA9C 100%)'
    }, {
        value: 25,
        color: 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)'
    },
    {
        value: 25,
        color: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)'
      }
  ];
  
  const maxValue = 25;
  const container1 = document.querySelector('.room_detailes_impressions_diagram');
  const addSector = function(data, startAngle, collapse) {
    const sectorDeg = 3.6 * data.value;
    let skewDeg = 90 + sectorDeg;
    const rotateDeg = startAngle;
    if (collapse) {
      skewDeg++;
    }
    const sector1 = document.createElement('div');
    sector1.className = 'diagram-sector';
    sector1.style.background = data.color;
    sector1.style.transform = 'rotate(' + rotateDeg + 'deg) skewY(' + skewDeg + 'deg)';
    
    container1.append(sector1);
    return startAngle + sectorDeg;
  };
  
  dataset.reduce(function (prev, curr) {
    return (function addPart(data, angle) {
      if (data.value <= maxValue) {
        return addSector(data, angle, false);
      }
  
      return addPart({
        value: data.value - maxValue,
        color: data.color
      }, addSector({
        value: maxValue,
        color: data.color,
      }, angle, true));
    })(curr, prev);
  }, 0);
  