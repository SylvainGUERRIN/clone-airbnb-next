export default function House(props) {
    console.log(props)
    return(
        <div>
            <img src={props.picture} width="100%" alt="House picture"/>
            <p>
                {props.type} - {props.town}
            </p>
            <h2>{props.title}</h2>
        </div>
    )
}
