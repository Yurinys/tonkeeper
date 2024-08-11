import React from 'react';
import { DeepLinkingContextValue } from './deeplinking.types';

export const DeepLinkingContext = React.createContext<DeepLinkingContextValue | null>(null);Improve auth - handling edge cases