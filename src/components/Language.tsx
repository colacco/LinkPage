import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import usFlag from "../../public/header/language/eua.png";
import brFlag from "../../public/header/language/brazil.png";

export default function Language() {
    const [ checked, setChecked ] = useState(false); 
    const [ t, i18n ] = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(i18n.language === "en" ? "pt" : "en")
    }, [ checked, i18n ]);

    return(
        <label htmlFor="theme">
            <input
                id="theme" 
                type="checkbox" 
                checked={checked}
                onClick={() => setChecked(!checked)}
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