
import { useStoreWithEqualityFn } from 'zustand/traditional';
import { createStore } from 'zustand/vanilla';


export enum Pages {
    login = 'login',
    signup = 'signup',
    forgot_password = 'forgot_password',
    SSO = 'SSO',
    search = 'search',
    chat = 'chat',
    admin = 'admin',
    help = 'help',
    bug_report = 'bug_report',
}

export type Page = keyof typeof Pages;

interface State {
    availablePages: Page[],
    setAvailablePages: (page: Page[]) => void;
    // currentPage: Page,
    // setCurrentPage: (page: Page) => void;
}

const store = createStore<State>((set, get) => ({
    availablePages: ['search', 'chat', 'admin', 'help', 'bug_report'],
    setAvailablePages: (availablePages) => set({availablePages}),
    // currentPage: 'search',
    // setCurrentPage: (currentPage) => set({currentPage}),
}));

function useStore(): State;
function useStore<T>(selector: (state: State) => T, equals?: (a: T, b: T) => boolean): T;
function useStore<T>(selector?: (state: State) => T, equals?: (a: T, b: T) => boolean) {
  return useStoreWithEqualityFn(store, selector!, equals);
}

export { store, useStore };
