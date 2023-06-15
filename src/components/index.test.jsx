// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import { renderHook } from '@testing-library/react';
// import { useGetAllTracksQuery } from '../services/api';
// import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import { setupListeners } from '@reduxjs/toolkit/query';

// export function withStoreProvider(store) {
//   return function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>;
//   };
// }
// export const setupApiStore = (api, extraReducers, withoutListeners) => {
//   const getStore = () =>
//     configureStore({
//       reducer: { [api.reducerPath]: api.reducer, ...extraReducers },
//       middleware: (gdm) =>
//         gdm({ serializableCheck: false, immutableCheck: false }).concat(
//           api.middleware
//         ),
//     });

//   const initialStore = getStore();
//   const refObj = {
//     api,
//     store: initialStore,
//     wrapper: withStoreProvider(initialStore),
//   };

//   let cleanupListeners;

//   beforeEach(() => {
//     const store = getStore();
//     refObj.store = store;
//     refObj.wrapper = withStoreProvider(store);

//     if (!withoutListeners) {
//       cleanupListeners = setupListeners(store.dispatch);
//     }
//   });

//   afterEach(() => {
//     cleanup();

//     if (!withoutListeners) {
//       cleanupListeners();
//     }

//     refObj.store.dispatch(api.util.resetApiState());
//   });

//   return refObj;
// };

// export const customRender = (ui, options) =>
//   render(ui, { wrapper: AllProviders, ...options });

// const handlers = [
//   rest.get('https://painassasin.online/catalog/track/all/', (req, res, ctx) => {
//     return res(
//       ctx.json({
//         tracks: [
//           { id: 1, name: 'Track 1' },
//           { id: 2, name: 'Track 2' },
//         ],
//       })
//     );
//   }),
// ];

// const server = setupServer(...handlers);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// test('should fetch all tracks successfully', async () => {
//   // Render the hook
//   const { result, waitForNextUpdate } = renderHook(() =>
//     useGetAllTracksQuery()
//   );

//   // Wait for the data to be fetched
//   await waitForNextUpdate();

//   // Check the result
//   expect(result.current.data).toEqual({
//     tracks: [
//       { id: 1, name: 'Track 1' },
//       { id: 2, name: 'Track 2' },
//       // Add more tracks as needed
//     ],
//   });
//   expect(result.current.error).toBeUndefined();
//   expect(result.current.isLoading).toBe(false);
// });

// test('should handle fetch error', async () => {
//   // Set up a server error response
//   server.use(
//     rest.get(
//       'https://painassasin.online/catalog/track/all/',
//       (req, res, ctx) => {
//         return res(ctx.status(500));
//       }
//     )
//   );

//   // Render the hook
//   const { result, waitForNextUpdate } = renderHook(() =>
//     useGetAllTracksQuery()
//   );

//   // Wait for the request to fail
//   await waitForNextUpdate();

//   // Check the result
//   expect(result.current.data).toBeUndefined();
//   expect(result.current.error).toBeDefined();
//   expect(result.current.isLoading).toBe(false);
// });

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { setupApiStore } from './test-utils';
import { AllProviders } from './test-utils';
import { api, useGetAllTracksQuery } from '../services/api';
import Center from './center';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

const wrapper = ({ children }) => (
  <Provider store={store}>
    <AllProviders>{children}</AllProviders>
  </Provider>
);

const setup = () => {
  const utils = render(<Center />, { wrapper });
  const query = () => useGetAllTracksQuery(); // Your hook function
  return { ...utils, query };
};

const server = setupServer(
  rest.get('https://painassasin.online/catalog/track/all/', (req, res, ctx) => {
    return res(
      ctx.json({
        tracks: [
          { id: 1, name: 'Track 1' },
          { id: 2, name: 'Track 2' },
        ],
      })
    );
  })
);

describe('Integration Test', () => {
  let refObj;
  beforeEach(() => {
    refObj = setupApiStore(api);
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
    cleanup();
    server.close();
  });

  it('should fetch all tracks successfully', async () => {
    const { query } = setup();
    const { result, waitForNextUpdate } = query();

    await waitForNextUpdate();

    expect(result.current.error).toBeUndefined();
    expect(result.current.isLoading).toBe(false);
  });

  it('should handle fetch error', async () => {
    server.use(
      rest.get(
        'https://painassasin.online/catalog/track/all/',
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    const { query } = setup();
    const { result, waitForNextUpdate } = query();

    await waitForNextUpdate();

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeDefined();
    expect(result.current.isLoading).toBe(false);
  });
});
