import type { Metadata } from "next";
import { Poppins ,Edu_NSW_ACT_Foundation} from "next/font/google";
import * as SC from "../styled-components/styles"
import "./globals.css";
import { SideBarLayout } from "@/components/SideBarLayout";
import { FooterOptions } from "@/components/FooterOptions";
const edunsw = Edu_NSW_ACT_Foundation({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La hamburguesa - cátalogo",
  description:
    "Aquí podras encontrar todo el catálogo de nuestras hamburguesas, hecho con mucho amor",
  keywords: ["la hamburguesa", "hamburguesas", "comida rapida", "comida", "cali","golden"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={edunsw.className}>
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
