import { useTranslation } from "react-i18next";

export function Dashboard({ user }) {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>
        {t("dashboard.welcome")} {user.firstName} {user.lastName}
      </h1>
      <div className="col-md-12 d-flex  text-md-start text-center gap-5 px-3 flex-column flex-md-row ">
        {t("dashboard.texts", { returnObjects: true }).map((item) => (
          <article key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
