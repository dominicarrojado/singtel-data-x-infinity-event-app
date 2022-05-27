import { render } from '@testing-library/react';
import Home from '../index.page';

jest.useFakeTimers();

describe('<Home />', () => {
  const renderComponent = () => render(<Home />);

  it('should render without errors', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });
});
