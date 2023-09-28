import SingleBlock from "./singleBlock";

interface Props {
    firstColor: string,
    secondColor: string,
    thirdColor: string,
    onClick: (color: string) => void
}

function Blocks({ firstColor, secondColor, thirdColor, onClick}: Props) {

    console.log(firstColor, secondColor, thirdColor)

  return (
    <div className="blocks">
        <SingleBlock onClick={onClick} hex={firstColor}></SingleBlock>
        <SingleBlock onClick={onClick} hex={secondColor}></SingleBlock>
        <SingleBlock onClick={onClick} hex={thirdColor}></SingleBlock>
    </div>
  );
}
export default Blocks;
