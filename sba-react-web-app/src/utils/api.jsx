export const fetchTriviaData = async (endpoint) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/${endpoint}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
