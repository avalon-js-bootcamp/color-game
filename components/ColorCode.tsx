interface Props {
    hex: string
}

function ColourCode(props: Props) {
  return <span>{props.hex}</span>;
}

export default ColourCode;