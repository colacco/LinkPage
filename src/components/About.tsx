import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import profile from "../../public/profile/profile.png";

export default function About(){
    const { t } = useTranslation();

    return(
        <section className="flex flex-col items-center">
            <motion.img 
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                src={profile} 
                alt="Gabriel Colaço" 
                width={110}
            />
            <p className="mt-3 font-bold text-white lg:text-xl">Gabriel Colaço</p>
            <p className="text-[#DDD] text-sm lg:text-lg">{t("about.desc")}</p>
        </section>
    );
}