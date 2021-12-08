import React from 'react'
import styles from "./footer.module.scss"
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.social}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Font_Awesome_5_brands_vk.svg/1200px-Font_Awesome_5_brands_vk.svg.png" alt="" />
                <img src="https://www.freepngimg.com/thumb/facebook/62611-social-media-computer-facebook-icons-hd-image-free-png.png" alt="" />
                <img src="https://icon-library.com/images/black-twitter-icon-transparent-background/black-twitter-icon-transparent-background-0.jpg" alt="" />
                <img src="https://multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-sem-fundo16.png" alt="" />
                <img src="https://arttravelling.ru/wp-content/uploads/2017/07/telegram_app1600-1024x1024.png" alt="" />
            </div>
            <div className={styles.about}>
                <div>Вакансии</div>
                <div>О компании</div>
                <div>сервисы</div>
                <div>Наши контакты</div>
            </div>
            <hr />
            <div className={styles.desc}>
                <div>
                    @ 2003 - 2021
                </div>
                <div>
                    Сеть ресторанов
                </div>
                <div>
                    Проект для портфолио
                </div>
            </div>
        </div>
    )
}

export default Footer
