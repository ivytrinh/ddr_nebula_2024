interface AboutFrameProps {
    Description1: string;
    Qoute: string;
    Description2: string;
}

export const MenuFrame = ({ Description1, Qoute, Description2 }: AboutFrameProps) => {
    
    return (
        <div className="flex flex-col min-h-[25vh] w-[30vh] items-center justify-center rounded-2xl bg-base-color-alt/60 hover:border-primary hover:border-2 cursor-pointer">
            <div className="flex flex-col items-center">
                <p className="text-primary text-lg pt-[4vh] font-bold">{Description1}</p>
                <p className="text-primary text-sm ">{Qoute}</p>
                <p className="text-primary text-sm ">{Description2}</p>
            </div>
        </div>
)
};