import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "Meals",
  description: "Explore and share delicious meals from our community.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const page = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share ur favorite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default page;
