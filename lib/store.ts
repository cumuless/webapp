import { persist } from 'zustand/middleware';
import { useStoreWithEqualityFn } from 'zustand/traditional';
import { createStore } from 'zustand/vanilla';

export type Page = {
  page:
    | 'login'
    | 'signup'
    | 'forgot_password'
    | 'SSO'
    | 'search'
    | 'chat'
    | 'admin'
    | 'help'
    | 'bug_report';
};

enum SourceTypes {
  Drive = 'Drive',
  Slack = 'Slack',
  Gmail = 'Gmail',
  Slab = 'Slab',
}

export type SourceType = keyof typeof SourceTypes;

enum ContentTypes {
  PDF = 'PDF',
  GDoc = 'GDoc',
  GSheet = 'GSheet',
  GSlide = 'GSlide',
  Image = 'Image',
}

export type ContentType = keyof typeof SourceTypes;

export type User = {
  uid: string;
  name: string;
};

export type VectorType = number[];

export type Source = {
  id: string;
  sourceType: SourceType;
  contentType: ContentType;
  title: string;
  content?: string;
  lastModified?: Date;
  owner?: User;
  url: string;
  vector?: VectorType;
  tags?: [{ title: string; url: string }];
};

export type MessageType = {
  id: string;
  sessionID: string;
  sender: 'User' | 'Assistant';
  content: string;
  timestamp?: string;
  sources?: Source[];
};

export type PopupMessageType = 'Info' | 'Error' | 'Success' | 'Warning';
export type SemanticColors = 'red' | 'green' | 'blue' | 'yellow';

type PopupState = {
  message: string;
  type: PopupMessageType;
};

export const PopupMessageColorMapping: Record<PopupMessageType, SemanticColors> = {
  Error: 'red',
  Success: 'green',
  Warning: 'yellow',
  Info: 'blue',
};

export type Appearance = 'light' | 'dark';
export const showErrorPopup = (message: string) =>
  store.setState({ popupState: { type: 'Error', message } });
export const showSuccessPopup = (message: string) =>
  store.setState({ popupState: { type: 'Success', message } });
export const showInfoPopup = (message: string) =>
  store.setState({ popupState: { type: 'Info', message } });
export const showWarningPopup = (message: string) =>
  store.setState({ popupState: { type: 'Warning', message } });

export const setName = (name: string) => store.setState({ name });

interface State {
  availablePages: Page[];
  popupState: PopupState;
  name: string;
  appearance: Appearance;
  setAvailablePages: (page: Page[]) => void;
  setAppearance: (appearance: Appearance) => void;
  resetPopup: () => void;
  // currentPage: Page,
  // setCurrentPage: (page: Page) => void;
}

const store = createStore<State>()(
  persist(
    (set) => ({
      availablePages: [{ page: 'search' }, { page: 'chat' }],
      popupState: { message: '', type: 'Info' },
      name: '',
      appearance: 'light',
      setAvailablePages: (availablePages) => set({ availablePages }),
      setAppearance: (appearance) => set({ appearance }),
      resetPopup: () => set({ popupState: { message: '', type: 'Info' } }),
      // currentPage: 'search',
      // setCurrentPage: (currentPage) => set({currentPage}),
    }),
    {
      name: 'cumuless',
    }
  )
);

function useStore(): State;
function useStore<T>(selector: (state: State) => T, equals?: (a: T, b: T) => boolean): T;
function useStore<T>(selector?: (state: State) => T, equals?: (a: T, b: T) => boolean) {
  return useStoreWithEqualityFn(store, selector!, equals);
}

export { store, useStore };
