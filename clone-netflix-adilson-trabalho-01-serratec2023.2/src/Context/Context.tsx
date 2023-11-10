
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface AuthContextProps {
  listaUsuarios: any[]; 
  setListaUsuarios: Dispatch<SetStateAction<any[]>>;

}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  listaUsuarios: [],
  setListaUsuarios: () => {}
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [listaUsuarios, setListaUsuarios] = useState<any[]>([]);

  return (
    <AuthContext.Provider value={{listaUsuarios, setListaUsuarios }}>
      {children}
    </AuthContext.Provider>
  );
};
