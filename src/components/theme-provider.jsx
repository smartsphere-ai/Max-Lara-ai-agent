import { createContext, useContext, useEffect, useState } from "react"

const ThemeProviderContext = createContext()

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = false,
  storageKey = "ui-theme",
  attribute = "data-theme",
}) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    const storedTheme = localStorage.getItem(storageKey)

    if (storedTheme) {
      setTheme(storedTheme)
      root.classList.add(storedTheme)
    } else if (enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemTheme)
      root.classList.add(systemTheme)
    } else {
      root.classList.add(defaultTheme)
    }
  }, [defaultTheme, enableSystem, storageKey])

  const value = {
    theme,
    setTheme: (newTheme) => {
      const root = window.document.documentElement

      // Remove old theme class
      root.classList.remove("light", "dark")

      // Add new theme class
      root.classList.add(newTheme)

      // Store theme preference
      localStorage.setItem(storageKey, newTheme)

      setTheme(newTheme)
    },
  }

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

