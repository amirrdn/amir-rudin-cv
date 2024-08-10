import React, { createContext, useContext, useState } from 'react';

type MetaTagsContextType = {
    metaTags: { title: string; description: string };
    setMetaTags: React.Dispatch<React.SetStateAction<{ title: string; description: string }>>;
  };
export const MetaTagsContext = createContext<MetaTagsContextType | undefined>(undefined);

export const MetaTagsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [metaTags, setMetaTags] = useState<{ title: string; description: string }>({ title: '', description: '' });

    return (
        <MetaTagsContext.Provider value={{ metaTags, setMetaTags }}>
            {children}
        </MetaTagsContext.Provider>
    );
};

export const useMetaTags = () => {
    return useContext(MetaTagsContext);
};