import { createContext, FC, useState } from 'react';

type SidebarContext = {
  sidebarToggle: any;
  toggleSidebar: (event) => void;
  closeSidebar: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
);



export const SidebarProvider: FC = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  function emitEvent(name, data) {
    dispatchEvent(new CustomEvent(name, {
      detail: data,
    }))
  }

  const toggleSidebar = event => {
    setSidebarToggle(!sidebarToggle);
    event.preventDefault()
    emitEvent('@mc/react-route/todo/add-task', true)
  };

  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
