import { useTranslation } from "react-i18next";
import ExternalLink from "./ExternalLink";
import gitHubIcon from "/links/gitHub.png";
import linkedInIcon from "/links/linkedIn.png";
import pomodoroInuIcon from "/links/pomodoroInu.png";


export default function LinkContainer() {
    const { t } = useTranslation();

    return (
        <section className="flex flex-col items-center gap-3">
            <ExternalLink
                link="https://colacco.github.io/PomodoroInu/"
                alt={t("linkcontainer.altPomodoroInu")}
                image={pomodoroInuIcon}
                description={t("linkcontainer.descpomodoroinu")}
                mainColor="#BF4124"
                secondColor="#F2A74B"
            />
            <ExternalLink
                link="https://linkedin.com/in/gabriel-colacco"
                alt={t("linkcontainer.altlinkedin")}
                image={linkedInIcon}
                description={t("linkcontainer.desclinkedin")}
                mainColor="#035AA6"
                secondColor="#0511F2"
            />
            <ExternalLink
                link="https://github.com/colacco"
                alt={t("linkcontainer.altgithub")}
                image={gitHubIcon}
                description={t("linkcontainer.descgithub")}
                mainColor="#262626"
                secondColor="#595959"
            />
        </section>
    );
}