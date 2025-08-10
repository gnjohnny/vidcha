import { ServerCrash, ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex justify-center items-center gap-2 flex-col">
                <ServerCrash size={84} className="animate-pulse" />
                <div className="flex justify-center items-center gap-2 flex-col">
                    <h1 className="text-2xl font-semibold tracking-wider flex justify-center items-center gap-1">
                        <Link to="/" className="flex items-center gap-2.5">
                            <ShipWheelIcon className="size-9 text-primary" />
                            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-wider">
                                VidCha
                            </span>
                        </Link>
                        Says Page Not Found !{" "}
                    </h1>
                    <Link to={"/"}>
                        <button className="p-2 bg-primary/80 text-primary-content font-bold rounded-xl hover:bg-primary/70 transition duration-300 cursor-pointer">
                            Return Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
