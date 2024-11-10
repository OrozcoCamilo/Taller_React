// src/services/api.js
export const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      return [];
    }
  };
  