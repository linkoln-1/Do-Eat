import React from 'react'
import styles from "./header.module.scss"
import logo from "../../../img/logo.png"
import basket from "../../../img/image1.png"
import profile from "../../../img/profile.png"
function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.options}>
                <div><img src={basket} alt="" /></div>
                <div><img src={profile} alt="" /></div>
            </div>
        </div>
    )
}

export default Header
