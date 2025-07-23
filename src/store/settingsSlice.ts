import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  searchQuery: string;
  currentPage: number;
  sortKey: string;
}

const defaultState: SettingsState = {
  searchQuery: '',
  currentPage: 1,
  sortKey: '',
};

const loadSettings = (): SettingsState => {
  try {
    const savedSettings = localStorage.getItem('tableSettings');
    if (savedSettings === null) return defaultState;
    return JSON.parse(savedSettings);
  } catch {
    return defaultState;
  }
};

const saveSettings = (state: SettingsState) => {
  try {
    localStorage.setItem('tableSettings', JSON.stringify(state));
  } catch {}
};

const initialState = loadSettings();

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
      saveSettings(state);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      saveSettings(state);
    },
    setSortKey: (state, action: PayloadAction<string>) => {
      state.sortKey = action.payload;
      state.currentPage = 1;
      saveSettings(state);
    },
    resetSettings: (state) => {
      state.searchQuery = '';
      state.currentPage = 1;
      state.sortKey = '';
      saveSettings(state);
    },
  },
});

export const { setSearchQuery, setCurrentPage, setSortKey, resetSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
