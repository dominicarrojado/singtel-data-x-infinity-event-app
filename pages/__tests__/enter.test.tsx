import { render } from '@testing-library/react';
import Enter from '../enter.page';

jest.useFakeTimers();

describe('<Enter />', () => {
  const renderComponent = () => render(<Enter />);
  const scrollToOrig = window.scrollTo;

  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    window.scrollTo = scrollToOrig;
  });

  it('should render without errors', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });
});
