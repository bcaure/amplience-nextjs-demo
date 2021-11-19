import { ContentClient } from 'dc-delivery-sdk-js';
import React, {
  useState, createContext, useContext,
} from 'react';
import getAmplience from './amplience';

const amplienceContext = createContext<ContentClient | null >(null);

// eslint-disable-next-line react/prop-types
export const AmplienceProvider = ({ children }: { children: any}) => {
  const [client] = useState(getAmplience());

  return (
    <amplienceContext.Provider value={client}>
      {children}
    </amplienceContext.Provider>
  );
};

export const useAmplience = (): ContentClient | null => useContext(amplienceContext);
