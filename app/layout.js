import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "BlogNet",
  description: "A social network home of blogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="https://www.svgrepo.com/show/448937/blog.svg"
        type="image/x-icon"
      />
      <body className={playfair.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
