import { ChangeEvent } from "react";

export const convertToBase64 = (
  e: ChangeEvent<HTMLInputElement>, 
  setSelectedFile : (value : string) => void
) => {
    const file = e.target.files?.[0]; // Mengambil file pertama
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Mengubah file menjadi base64
      reader.onload = () => {
        setSelectedFile(reader.result as string); // Menyimpan base64 ke state
      };
      reader.onerror = () => {
        console.error("Gagal mengubah file menjadi base64");
      };
    }
  };