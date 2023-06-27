'use client';

import React, { useEffect, useState } from 'react';

const OddspediaWidget = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.oddspediaWidgetOddsComparisonPopularSportsLeagues = {
        api_token: "1802fa7b754c1a082862aa19948c30499bcd952be46462a15b5874b481e3",
        type: "odds-comparison",
        domain: "widget-trial.vercel.app/",
        selector: "oddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false",
        width: "0",
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
    `;

    document.body.appendChild(script);

    const widgetScript = document.createElement('script');
    widgetScript.src =
      'https://widgets.oddspedia.com/js/widget/init.js?widgetId=oddspediaWidgetOddsComparisonPopularSportsLeagues';
    widgetScript.async = true;
    widgetScript.onload = () => {
      setWidgetLoaded(true);
    };

    document.body.appendChild(widgetScript);

    return () => {
      // Cleanup scripts when the component is unmounted
      document.body.removeChild(script);
      document.body.removeChild(widgetScript);
    };
  }, []);

  if (!widgetLoaded) {
    return null; // Render nothing until the widget is loaded
  }

  return (
    <div
      id="oddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false"
      className="oddspedia-widget"
    ></div>
  );
};

export default OddspediaWidget;
