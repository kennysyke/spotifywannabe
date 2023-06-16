import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { setupApiStore } from './test-utils';
import { useGetFavTracksQuery } from '../services/api';
import Center from './center';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

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

const storeRef = setupApiStore(useGetFavTracksQuery);

describe('Integration Test', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should fetch all tracks successfully', async () => {
    render(<Center />, { wrapper: storeRef.wrapper });

    await waitFor(() =>
      expect(storeRef.store.getState().tracks).not.toBeNull()
    );

    const tracks = storeRef.store.getState().tracks;
    expect(tracks).toBeDefined();
    expect(tracks.length).toBe(2);
    expect(tracks[0]).toEqual({ id: 1, name: 'Track 1' });
    expect(tracks[1]).toEqual({ id: 2, name: 'Track 2' });
  });

  // it('should handle fetch error', async () => {
  //   server.use(
  //     rest.get(
  //       'https://painassasin.online/catalog/track/all/',
  //       (req, res, ctx) => {
  //         return res(ctx.status(500));
  //       }
  //     )
  //   );

  //   const { query } = setup();
  //   const { result, waitForNextUpdate } = query();

  //   await waitForNextUpdate();

  //   expect(result.current.data).toBeUndefined();
  //   expect(result.current.error).toBeDefined();
  //   expect(result.current.isLoading).toBe(false);
  // });
});
