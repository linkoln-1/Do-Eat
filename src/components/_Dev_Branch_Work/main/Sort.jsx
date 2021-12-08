import React from 'react'
import styles from "./main.module.scss"
function Sort() {
    return (
        <div className={styles.sort}>
            <div>
                <input 
                type="text"
                placeholder="Поиск по блюдам"
                 />
            </div>
            <div>
            <span>сортировка по названию</span>
            <select>
                <option >по названию </option>
                <option >по категориям </option>
                <option >по ценам </option>
            </select>
            </div>
        </div>
    )
}

export default Sort
