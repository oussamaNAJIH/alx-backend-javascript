export default function updateUniqueItems(myMap) {
  try {
    myMap.forEach((value, key, myMap) => {
      if (value === 1) {
        myMap.set(key, 100);
      }
    });
  } catch (Error) {
    throw Error('Cannot process');
  }
}
