type Props = {
    txt: string;
}

export const Page: (txt: Props) => JSX.Element = ({txt}) => {

    return <div>
        <span>{txt}</span>
    </div>
}