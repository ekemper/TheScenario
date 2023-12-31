import {
    ReactNode,
    createContext,
    useState,
    Dispatch,
    SetStateAction,
} from 'react';

export interface ILoaderContext {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
    isLoading: false,
    setIsLoading: (isLoading: boolean) => { },
} as ILoaderContext;

export const LoaderContext = createContext<ILoaderContext>(defaultState);

export type IsLoadingContextProviderProps = {
    children: ReactNode;
};

export const LoaderContextProvider = ({
    children,
}: IsLoadingContextProviderProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading} }>
            {children}
        </LoaderContext.Provider>
    );
};