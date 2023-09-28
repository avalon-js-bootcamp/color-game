import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ColorCode from "@/components/ColorCode";
import Blocks from "@/components/Blocks";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

function getRandomColor(): string {
  // a b c d e f
  // 1 2 3 4 5 6 7 8 9 0
  const objectKey = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const hexColor = [];

  for (let i = 1; i < 7; i++) {
    const randomNumber = Math.floor(Math.random() * 16); // 0 - 15
    hexColor.push(objectKey[randomNumber]);
  }

  const hex = "#" + hexColor.join("");
  return hex;
}

export default function Home() {
  const [firstColor, setFirstColor] = useState("#000000");
  const [secondColor, setSecondColor] = useState("#000000");
  const [thirdColor, setThirdColor] = useState("#000000");

  const [correctColor, setCorrectColor] = useState("#000000");

  useEffect(() => {

    const firstColor = getRandomColor();
    const secondColor = getRandomColor();
    const thirdColor = getRandomColor();

    setFirstColor(firstColor);
    setSecondColor(secondColor);
    setThirdColor(thirdColor);

    const randomNumber = Math.floor(Math.random() * 3) + 1; // 1 - 3

    if (randomNumber === 1) {
      setCorrectColor(firstColor);
    } else if (randomNumber === 2) {
      setCorrectColor(secondColor);
    } else {
      setCorrectColor(thirdColor);
    }
  }, []);

  const handleClick = (color: string) => {
    if (color === correctColor) {
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
  };

  return (
    <>
      <Head>
        <title>Color Game</title>
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <h1>Color Codes</h1>
        <ColorCode hex={correctColor}></ColorCode>
        <h2>What color is this?</h2>
        <Blocks onClick={handleClick} firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor}></Blocks>

        <button>Play Again</button>
      </main>
    </>
  );
}
