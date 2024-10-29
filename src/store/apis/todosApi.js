import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducerPath: 'todos',
    
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    
    endpoints: ( builder ) => ({
    
        getAllTodos: builder.query({
            query: () => '/todos'
        }),

        getTodoById: builder.query({
            query: ( todoId ) => `/todos/${ todoId }`
        }),

    
    })
});

// createApi devuelve customHooks
export const { useGetAllTodosQuery, useGetTodoByIdQuery } = todosApi;