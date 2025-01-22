import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router"

const Homepage = () => {
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate("/create");
    }

    return (
        <div className="h-screen bg-[#0F172A]">
            <nav className="flex justify-between items-center sticky lg:top-3 top-0 left-auto right-auto mx-auto py-4 px-6 lg:rounded-md rounded-none lg:max-w-[75%] w-full gradientBg drop-shadow-xl text-white">
                <Link to={'/'} className="text-2xl font-bold">
                    Rapid Quest
                </Link>
                <div className="md:flex hidden gap-4">
                    <Link to={'/about'}>
                        About us
                    </Link>
                    <Link to={'/templates'}>
                        Templates
                    </Link>
                    <Link to={'/pricing'}>
                        Pricing
                    </Link>
                    <Link to={'/resources'}>
                        Resources
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <p className="hover:underline cursor-pointer" onClick={handleBtnClick}>Login</p>
                    <Button onClick={handleBtnClick}>
                        Join now
                    </Button>
                </div>
            </nav>

            <div className="flex justify-center items-center mt-20 text-white">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="md:text-4xl text-2xl font-bold">Design E-Mails Faster & Better</h1>
                    <div className="flex gap-4">
                        <Button onClick={handleBtnClick} className="bg-purple-600">Get Started</Button>
                        <Button onClick={handleBtnClick} className="bg-transparent border-white border-2">Join now</Button>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dh1qmnzyn/image/upload/v1737551678/Untitled_design-removebg-preview_sstrob.png" height={530} width={530} alt="Email Builder Hero Image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
