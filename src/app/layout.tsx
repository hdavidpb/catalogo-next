import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import * as SC from "../styled-components/styles"
import "./globals.css";
import { SideBarLayout } from "@/components/SideBarLayout";
import { FooterOptions } from "@/components/FooterOptions";
const poppins = Poppins({ subsets: ["latin"] ,weight:["200","400","600","900"]});

export const metadata: Metadata = {
  title: "Catalogo de productos",
  description: "Aquí podras encontrar todo el catalogo de productos que necesites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <SC.MainLayout>
          <SideBarLayout>
            <SC.FormLayout isFinished={false}>
              {children}
              <FooterOptions />
            </SC.FormLayout>
          </SideBarLayout>
        </SC.MainLayout>
      </body>
    </html>
  );
}
