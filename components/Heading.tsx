interface IHeadingProps {
    title: string;
}

const Heading = ({ title }: IHeadingProps) => {
    return <h1>{title}</h1>;
};

export default Heading;
