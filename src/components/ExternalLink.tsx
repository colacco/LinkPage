import { motion } from "framer-motion";

type ExternalLinkProps = {
    link: string,
    alt: string,
    image: string,
    description: string,
    mainColor: string,
    secondColor: string
}

export default function ExternalLink({ link, alt, image, description, mainColor, secondColor}: ExternalLinkProps){
    return(
        <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="h-[60px] w-[90%] max-w-[400px] pl-4 p-2 flex border-[1px] rounded-[32px] items-center justify-between"
            style={{
                backgroundColor: mainColor,
                borderColor: secondColor
            }}
        >
            <img
                src={image}
                alt={alt}
                width={40}
            />
            <p
                className="text-white pr-10"
            >
                {description}
            </p>
            <div></div>
        </motion.a>
    );
}