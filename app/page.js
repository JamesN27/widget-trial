'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import oddspedia from '../public/oddspedia.png';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.oddspediaWidgetOddsComparisonPopularSportsLeagues = {
        api_token: "1802fa7b754c1a082862aa19948c30499bcd952be46462a15b5874b481e3",
        type: "odds-comparison",
        domain: "widget-trial.vercel.app/",
        selector: "oddspedia-widget-container",
        width: "100%",
        theme: "1",
        odds_type: "1",
        language: "en",
        primary_color: "#283E5B",
        accent_color: "#00B1FF",
        font: "Roboto",
        logos: "true",
        limit: "10",
        popular: "false",
        sports: "",
        leagues: ""
      };

      const initScript = document.createElement('script');
      initScript.src =
        'https://widgets.oddspedia.com/js/widget/init.js?widgetId=oddspediaWidgetOddsComparisonPopularSportsLeagues';
      initScript.async = true;

      document.getElementById('oddspedia-widget-container').appendChild(initScript);
    `;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>

        <div id="oddspedia-widget-container"></div>

        <footer className={styles.footer}>
          <p>Data powered by Oddspedia</p>
          <Link href="https://oddspedia.com/">
            <Image src={oddspedia} alt="Logo" width={250} height={50} />
          </Link>
        </footer>
      </div>
    </main>
  );
}
