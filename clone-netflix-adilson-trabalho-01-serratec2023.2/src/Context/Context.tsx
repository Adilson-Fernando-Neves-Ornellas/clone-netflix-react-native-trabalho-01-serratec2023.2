
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface AuthContextProps {
  listaUsuarios: any[]; 
  setListaUsuarios: Dispatch<SetStateAction<any[]>>;
  logado: boolean
  setLogado: Dispatch<SetStateAction<boolean>>

}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  listaUsuarios: [{id:Number, nome:String, email:String,senha:String}],
  setListaUsuarios: () => {},
  logado: false,
  setLogado: () => {}
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [listaUsuarios, setListaUsuarios] = useState<any[]>([]);
  const [logado, setLogado] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{listaUsuarios, setListaUsuarios, logado, setLogado }}>
      {children}
    </AuthContext.Provider>
  );
};
