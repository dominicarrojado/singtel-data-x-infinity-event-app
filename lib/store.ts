import { createContext, Dispatch, SetStateAction } from 'react';
import { Entry } from './types';

export const StoreContext = createContext(
  {} as {
    entries: Array<Entry>;
    hasEntries: boolean;
    selectedEntry: Entry | null;
    setEntries: Dispatch<SetStateAction<Array<Entry>>>;
    setHasEntries: Dispatch<SetStateAction<boolean>>;
    setSelectedEntry: Dispatch<SetStateAction<Entry | null>>;
  }
);
