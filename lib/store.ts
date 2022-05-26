import { createContext, Dispatch, SetStateAction } from 'react';
import { Entry } from './types';

export const StoreContext = createContext(
  {} as {
    entries: Array<Entry>;
    selectedEntry: Entry | null;
    setEntries: Dispatch<SetStateAction<Array<Entry>>>;
    setSelectedEntry: Dispatch<SetStateAction<Entry | null>>;
  }
);
