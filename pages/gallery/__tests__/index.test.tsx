import { render } from '@testing-library/react';
import { StoreContext } from '../../../lib/store';
import { FetchState, StoreContextType } from '../../../lib/types';
import * as customHooks from '../../../lib/custom-hooks';
import Gallery from '../index.page';

jest.useFakeTimers();

describe('<Gallery />', () => {
  const renderComponent = (store: Partial<StoreContextType>) =>
    render(
      <StoreContext.Provider value={store as StoreContextType}>
        <Gallery />
      </StoreContext.Provider>
    );

  it('should render without errors', () => {
    jest
      .spyOn(customHooks, 'useGetEntries')
      .mockReturnValue([FetchState.SUCCESS, [], false, jest.fn()]);

    const { container } = renderComponent({});

    expect(container).toBeInTheDocument();
  });
});
