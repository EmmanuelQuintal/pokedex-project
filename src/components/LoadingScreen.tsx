import React from "react";
import pokebolaLoading from "../assets/pokebola-loading.png";
import styles from "./shared/loadingScreen.module.css";

const LoadingScreen = () => {
    return (
        <div className={styles.loadingScreen}>
            <img
                className={styles.loadingScreenIcon}
                src={pokebolaLoading}
                alt="PokebolaLoading"
            />
        </div>
    );
};

export default LoadingScreen;
