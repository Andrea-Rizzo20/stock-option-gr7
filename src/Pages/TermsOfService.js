import { useTranslation } from "react-i18next";

export function TermsOfService() {
  const { t } = useTranslation();
  return (
    <div className="container py-5">
      {t("termsOfService", { returnObjects: true }).map((item, index) => {
        return (
          <div key={index}>
            {item.pageTitle && <h1>{item.pageTitle}</h1>}
            {item.pageSubtitle && <p>{item.pageSubtitle}</p>}
            {item.sectionTitle && <h2>{item.sectionTitle}</h2>}
            {item.sectionTextContent && <p>{item.sectionTextContent}</p>}
            {item.listTextItems && (
              <>
                <ul>
                  {item.listTextItems.map((li) => {
                    return <li key={li.id + li.content}>{li.content}</li>;
                  })}
                </ul>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
