import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Notas = {
  [key: number]: number;
};

export default function Home() {
  const [valor, setValor] = useState('');
  const [notas, setNotas] = useState<Notas>({});

  const calcularNotas = () => {
    let valorRestante = parseInt(valor, 10);
    const notasDisponiveis: number[] = [20, 10, 5, 1];
    const resultado: Notas = {};

    notasDisponiveis.forEach((nota) => {
      resultado[nota] = Math.floor(valorRestante / nota);
      valorRestante %= nota;
    });

    setNotas(resultado);
  };

  return (
    <>
      <Head>
        <title>Caixa Eletrônico</title>
        <meta name="description" content="Criado por Andresa A Ribeiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <h1>Caixa Eletrônico</h1>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Digite o valor"
        />
        <button onClick={calcularNotas}>Calcular Notas</button>
        <div>
          <h2>Quantidade de Notas:</h2>
          <p>Notas de 20: {notas[20] || 0}</p>
          <p>Notas de 10: {notas[10] || 0}</p>
          <p>Notas de 5: {notas[5] || 0}</p>
          <p>Notas de 1: {notas[1] || 0}</p>
        </div>
      </div>
    </>
  );
}
