import { useTranslation } from "react-i18next";

export function PrivacyPolicy() {
  const { i18n, t } = useTranslation();
  const toIta = () => {
    i18n.changeLanguage("it");
  };
  const toEng = () => {
    i18n.changeLanguage("en");
  };
  return (
    <div className="container py-5">
      {t("privacyPolicy", { returnObjects: true }).map((item) => {
        return (
          <>
            {item.pageTitle && <h1>{item.pageTitle}</h1>}
            {item.pageSubtitle && <p>{item.pageSubtitle}</p>}
            {item.sectionMainTitle && <h2>{item.sectionMainTitle}</h2>}
            {item.sectionMainSubTitle && <h3>{item.sectionMainSubTitle}</h3>}
            {item.sectionTitle && <h4>{item.sectionTitle}</h4>}
            {item.sectionTextContent && <p>{item.sectionTextContent}</p>}
            {item.listTextItems && (
              <ul>
                {item.listTextItems.map((li) => {
                  return (
                    <li key={li.id}>
                      {li.title && <strong>{li.title}</strong>}
                      {li.content}
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        );
      })}

      <button onClick={toIta}>ita</button>
      <button onClick={toEng}>eng</button>
    </div>
  );
}
