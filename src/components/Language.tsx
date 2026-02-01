import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import usFlag from "/language/eua.png";
import brFlag from "/language/brazil.png";

export default function Language() {
    const { t, i18n } = useTranslation();
    const [checked, setChecked] = useState(i18n.language.startsWith("pt"));

    const handleToggle = () => {
        const newLang = i18n.language.startsWith("en") ? "pt" : "en";
        i18n.changeLanguage(newLang);
        setChecked(newLang === "pt");
    };

    return (
        <label htmlFor="theme">
            <input
                id="theme"
                type="checkbox"
                checked={checked}
                onChange={handleToggle}
                className="hidden"
            />
            <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                src={checked ? brFlag : usFlag}
                alt={t("header.language.alt")}
                width={30}
                className="cursor-pointer lg:w-[40px]"
            />
        </label>
    );
}