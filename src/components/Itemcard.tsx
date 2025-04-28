import { PropsWithChildren } from "react";
import styles from "./Itemcard.module.scss";

type ItemCardProps = PropsWithChildren<{
    title: string;
    imageUrl: string;
    releaseDate: string;
    raiting: number;}>

export function ItemCard({title, imageUrl, releaseDate, raiting}: ItemCardProps) {
return (
    <li className={styles.root}>
        <img src={imageUrl} alt={`${title} poster`} />
        <h3>{title}</h3>
        <p>{releaseDate}</p>
        <div>
            <p>{raiting}</p>
            <input type="checkbox" />
        </div>      
    </li>
    
)
}