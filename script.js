/*
 * Complete the 'organizingContainers' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts 2D_INTEGER_ARRAY container as parameter.
 */

const organizingContainers = (containers) => {
    // keep # balls per container
    // keep # of types of balls
    
    const containerCounts = new Array(containers.length).fill(0);
    const ballTypes = new Array(containers.length).fill(0);
    
    for(let i = 0; i < containers.length; i++) {
        const container = containers[i];
        
        for(let j = 0; j < containers.length; j++) {
            const ballCount = container[j];
            containerCounts[i] +=ballCount;
            ballTypes[j] +=ballCount;
        }
    }
    containerCounts.sort();
    ballTypes.sort();
    console.log({containerCounts, ballTypes});
    for(let i = 0; i < containers.length; i++) {
        if(containerCounts[i] !== ballTypes[i]) {
            return "Impossible";
        }
    }
    
    return "Possible";
}


//////////////////////////////////////////////////////////////////////////
// another solution
const organizingContainers = (containers) => {
    let typeTotals = [];

  containers.forEach(container => {
    container.forEach((typeTotal, type) => {
      typeTotals[type]
        ? (typeTotals[type] += typeTotal)
        : (typeTotals[type] = typeTotal);
    });
  });

  const isContainerOrganizationPossible = containers.every(container => {
    const containerSum = container.reduce(
      (containerSum, typeTotal) => containerSum + typeTotal,
      0
    );

    return typeTotals.some(typeTotal => typeTotal === containerSum);
  });

  return isContainerOrganizationPossible ? 'Possible' : 'Impossible';
}
