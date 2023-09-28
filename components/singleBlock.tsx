interface Props {
    hex: string
    onClick: (hex: string) => void
}

function SingleBlock (props: Props) {
    let color = props.hex

    const handleClick = () => {
        console.log("CLick")
        props.onClick(color)
    }

    return(
        <button onClick={handleClick} className="single-block" style={ { backgroundColor: color } }></button>
    )
}
export default SingleBlock;