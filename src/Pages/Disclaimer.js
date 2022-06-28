import { useTranslation } from "react-i18next";
import GoToTop from "../Components/GoToTop";

export function Disclaimer() {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column mx-5 gap-02">
      {t("disclaimer", { returnObjects: true }).map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          {item.content && <p>{item.content}</p>}
          {item.list && (
            <ul>
              {item.list.map((list) => (
                <li>
                  <strong>{list.title}</strong>
                  {list.content}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <GoToTop />
    </div>
  );
}
