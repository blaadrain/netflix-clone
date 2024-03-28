import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
