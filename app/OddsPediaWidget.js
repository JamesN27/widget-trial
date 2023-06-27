import React, { useEffect } from 'react';

const OddspediaWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.oddspediaWidgetOddsComparisonPopularSportsLeagues = {
        api_token: "1802fa7b754c1a082862aa19948c30499bcd952be46462a15b5874b481e3",
        type: "odds-comparison",
        domain: "widget-trial.vercel.app/",
        selector: "oddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false",
        width: "0",
        theme: "0",
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

    const initScript = document.createElement('script');
    initScript.src =
      'https://widgets.oddspedia.com/js/widget/init.js?widgetId=oddspediaWidgetOddsComparisonPopularSportsLeagues';
    initScript.async = true;
    document.body.appendChild(initScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(initScript);
    };
  }, []);

  return <div id="oddspedia-widget-container"></div>;
};

export default OddspediaWidget;
