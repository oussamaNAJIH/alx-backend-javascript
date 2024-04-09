export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve(true);
    reject(new Error('An error occurred while fetching data from the API'));
  });
}
