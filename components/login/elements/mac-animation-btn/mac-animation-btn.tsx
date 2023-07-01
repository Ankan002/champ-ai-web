interface Props {
    backgroundColor: "bg-primary-yellow" | "bg-primary-green" | "bg-primary-red";
}

const MacAnimationBtn = (props: Props) => {
    const { backgroundColor } = props;

    return (
        <div className={`w-4 h-4 rounded-full ${backgroundColor} mx-1`}>

        </div>
    );
};

export default MacAnimationBtn;
