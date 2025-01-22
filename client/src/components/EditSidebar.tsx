import { useNavigate } from "react-router";
import { Separator } from "./ui/separator"
import { IoArrowBack } from "react-icons/io5";

const EditSidebar = () => {
    const navigate = useNavigate();

    const handleBack = () => navigate("/");

    return (
        <div className="h-screen flex flex-col">
            <div className="py-2 px-5">
                <div className="flex items-center gap-2">
                    <IoArrowBack className="cursor-pointer" onClick={handleBack} />
                    <p>Basic Email Template</p>
                </div>
            </div>
            <Separator className="h-1" orientation="horizontal" />
            <div className="flex flex-row h-full">

                <div className="basis-[70%] p-3">

                </div>
                <Separator className="w-1" orientation="vertical" />
                <div className="basis-[30%]">

                </div>
            </div>
        </div>
    )
}

export default EditSidebar
