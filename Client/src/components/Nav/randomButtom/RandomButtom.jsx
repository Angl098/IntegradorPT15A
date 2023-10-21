import styles from "./RandomButtom.module.css"

export default function RandomButton({onRandom}){

    return(
        <>
            <button className={styles.random} onClick={()=>{onRandom()}}> Add
            </button>
        </>
    )
}