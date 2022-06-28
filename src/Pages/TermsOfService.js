import { useTranslation } from "react-i18next";
import GoToTop from "../Components/GoToTop";

export function TermsOfService() {
  const { t } = useTranslation();
  return (
    <div className="container py-5">
      {t("termsOfService", { returnObjects: true }).map((item) => {
        return (
          <>
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
          </>
        );
      })}
      <GoToTop />
    </div>
  );
}
