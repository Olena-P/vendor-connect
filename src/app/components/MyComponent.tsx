'use client';

import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

// Ініціалізація Query Client
const queryClient = new QueryClient();

interface Data {
  id: number;
  title: string; // Change 'name' to 'title' based on the API response
  // інші поля даних
}

// Функція для отримання даних із сервера
const fetchData = async (): Promise<Data[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Компонент, який використовує React Query для кешування та оптимізації даних
const MyComponent = () => {
  const queryClient = useQueryClient();

  // Використання useQuery для отримання даних
  const { data, error, isLoading, isFetching } = useQuery<Data[]>(
    'dataKey', // Ключ запиту
    fetchData, // Функція для отримання даних
    {
      // Оптимістичне оновлення або інші параметри
      staleTime: 1000 * 60 * 5, // Данні вважаються свіжими протягом 5 хвилин
      cacheTime: 1000 * 60 * 10, // Дані залишаються у кеші протягом 10 хвилин
      refetchOnWindowFocus: false, // Вимкнути перезапит при фокусуванні вікна
    }
  );

  // Функція для ручного оновлення даних
  const refetchData = async () => {
    await queryClient.invalidateQueries('dataKey');
  };

  // Обробка стану завантаження
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Обробка помилок
  if (error) {
    const errorMessage =
      (error as Error).message || 'An unknown error occurred';
    return <div>Error: {errorMessage}</div>;
  }

  // Перевіряємо, що data існує і є масивом перед викликом map
  return (
    <div>
      <h1>Optimized Data Display</h1>
      <ul>
        {data && data.length > 0 ? (
          data.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>No data available</li>
        )}
      </ul>
      {isFetching ? <div>Updating data...</div> : null}
      <button onClick={refetchData}>Refetch Data</button>
    </div>
  );
};

// Компонент обгортки для забезпечення контексту QueryClient
const ReactQuery = () => (
  <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
);

export default ReactQuery;
