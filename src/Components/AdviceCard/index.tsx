import styles from "./advicecard.module.scss";

// IMPORT IMG DIVIDER
import divider_img from "../../assets/advice_imgs/pattern-divider-desktop.svg";
// IMPORT IMG DICE
import dice_img from "../../assets/advice_imgs/icon-dice.svg";
// CALIMERO IMG
import calimero from "../../assets/advice_imgs/calimero.png";

interface Props {
  dataadvice: {
    id: number;
    advice: string;
  };
  handlDice: () => void;
}

export default function AdviceCard({ dataadvice, handlDice }: Props) {
  console.log(dataadvice);
  return (
    <>
      <div className={styles.main_advice_card}>
        {/* CALIMERO OO */}
        <div className={styles.calimero_div}>
          <img src={calimero} alt=" calimero" />
        </div>
        <div className={styles.advice_id}>
          <p>ADVICE #{dataadvice.id}</p>
        </div>
        <div className={styles.advice_text}>
          <h1>"{dataadvice.advice}"</h1>
        </div>
        <div className={styles.divider_box}>
          <img src={divider_img} alt="img divider" />
        </div>
        <div className={styles.dice_box}>
          <div className={styles.dice_zone}>
            <img
              onClick={handlDice}
              className={styles.dice_img_class}
              src={dice_img}
              alt="Dice img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
