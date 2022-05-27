import { render } from '@testing-library/react';
import faker from '@faker-js/faker';
import { StoreContext } from '../../../lib/store';
import { FetchState, StoreContextType } from '../../../lib/types';
import * as customHooks from '../../../lib/custom-hooks';
import GalleryView from '../view.page';

jest.useFakeTimers();

describe('<GalleryView />', () => {
  const renderComponent = (store: Partial<StoreContextType>) =>
    render(
      <StoreContext.Provider value={store as StoreContextType}>
        <GalleryView />
      </StoreContext.Provider>
    );

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render without errors', () => {
    jest
      .spyOn(customHooks, 'useGetEntries')
      .mockReturnValue([FetchState.SUCCESS, [], false, jest.fn()]);

    const { container } = renderComponent({
      selectedEntry: {
        imageUrl: faker.image.imageUrl(),
        sticker: faker.datatype.number(),
        message: faker.lorem.sentence(),
        name: faker.name.findName(),
        email: faker.internet.email(),
      },
    });

    expect(container).toBeInTheDocument();
  });
});
