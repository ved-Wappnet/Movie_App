import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (newLanguage) => {
    console.log(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return { changeLanguage };
};

export default useLanguage;
