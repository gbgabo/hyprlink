import React, { createContext, useContext, useState } from "react";

interface PageContext extends Page {
  updateStyles: (selector: string, rules: Object) => void;
  setTitle: (state: string) => void;
  setStyles: (state: Styles) => void;
  setComponents: (state: Component[]) => void;
}

interface Props {
  page: Page;
  children: React.ReactNode;
}

const PageContext = createContext<PageContext | null>(null);

export const PageProvider: React.FC<Props> = ({ children, page }) => {
  const [title, setTitle] = useState(page.title);
  const [styles, setStyles] = useState<Styles>(page.styles);
  const [components, setComponents] = useState<Component[]>(page.components);

  const updateStyles = (selector: string, rules = {}) => {
    const updatedTheme = {
      ...styles,
      [selector]: { ...styles[selector], ...rules },
    };
    setStyles(updatedTheme);
  };

  return (
    <PageContext.Provider
      value={{
        title,
        components,
        styles,
        setTitle,
        setComponents,
        setStyles,
        updateStyles,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export function usePage() {
  const context = useContext(PageContext);
  if (!context) throw new Error("useTheme must be used within a PageProvider");
  const {
    title,
    components,
    styles,
    setTitle,
    setComponents,
    setStyles,
    updateStyles,
  } = context;
  return {
    title,
    components,
    styles,
    setTitle,
    setComponents,
    setStyles,
    updateStyles,
  };
}
