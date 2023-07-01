import { MacAnimationBtn } from "../elements";

const LoginHeroAnimation = () => {
    return (
        <div className="flex-1 w-full h-96 flex flex-col border-2 rounded-md border-primary-dark shadow-lg shadow-primary-dark/40 overflow-y-scroll">
            <div className="flex justify-end px-2 py-2 border-b-2 bg-secondary-light border-b-primary-dark">
                <MacAnimationBtn backgroundColor="bg-primary-green" />
                <MacAnimationBtn backgroundColor="bg-primary-yellow" />
                <MacAnimationBtn backgroundColor="bg-primary-red" />
            </div>
        </div>
    );
};

export default LoginHeroAnimation;
