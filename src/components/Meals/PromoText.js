import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Online Sushi Restaurant - Japanese
        Cuisine</h2>
      <p>
        Japanese Cuisine is an online sushi restaurant where your favourite sushi and sashimi,
        rolls and other dishes of national Japanese cuisine are made by a team of
        of professional chefs.
      </p>
      <p>
        Fast work and quality products, as well as the most authentic
        ingredients give a good flavour to the dishes, making the meal a pleasure to eat.
      </p>
    </section>
  );
};

export default PromoText;
