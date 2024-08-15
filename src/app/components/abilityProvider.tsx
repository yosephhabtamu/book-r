import { AppAbility, defineAbilitiesFor } from '@/hooks/defineAbilities';
import { create } from 'domain';
import React, { createContext, useContext } from 'react';

interface AbilityContextProps {
  ability: AppAbility;
}

const AbilityContext = createContext<AbilityContextProps>({ability: defineAbilitiesFor(  'user')});

export const AbilityProvider: React.FC<{ ability: AppAbility, children: Readonly<React.ReactNode> }> = ({ ability, children }) => {
  return (
    <AbilityContext.Provider value={{ ability }}>
      {children}
    </AbilityContext.Provider>
  );
};

export const useAbility = (role?:string | null) => {
  const context = useContext(AbilityContext);
  if(role)
    return { ability: defineAbilitiesFor(role)};
  return context;
};
