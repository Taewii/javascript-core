function systemComponents(input) {
  let systems = new Map();

  input.forEach(line => {
    let [systemName, systemComponent, subComponent] = line.split(' | ');

    if (!systems.has(systemName)) {
      systems.set(systemName, new Map());
    }

    if (!systems.get(systemName).has(systemComponent)) {
      systems.get(systemName).set(systemComponent, []);
    }
    systems.get(systemName).get(systemComponent).push(subComponent);
  });

  systems = new Map([...systems.entries()].sort((a, b) => {
    let result = b[1].size - a[1].size;

    if (result === 0) {
      result = a[0].localeCompare(b[0]);
    }

    return result;
  }));

  systems.forEach((components, systemName) => {
    components = new Map([...components.entries()].sort((a, b) => b[1].length - a[1].length));

    console.log(systemName);
    components.forEach((subComponents, componentName) => {
      console.log(`|||${componentName}`)
      subComponents.forEach(sc => console.log(`||||||${sc}`))
    });
  });
}

systemComponents([
  'SULS | Main Site | Home Page',
  'SULS | Main Site | Login Page',
  'SULS | Main Site | Register Page',
  'SULS | Judge Site | Login Page',
  'SULS | Judge Site | Submittion Page',
  'Lambda | CoreA | A23',
  'SULS | Digital Site | Login Page',
  'Lambda | CoreB | B24',
  'Lambda | CoreA | A24',
  'Lambda | CoreA | A25',
  'Lambda | CoreC | C4',
  'Indice | Session | Default Storage',
  'Indice | Session | Default Security',
]);