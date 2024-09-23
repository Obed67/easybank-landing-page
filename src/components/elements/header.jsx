import Button from "../elements/button";
import Image from "../../assets/images/image-mockups.png";
import IntroDesktop from "../../assets/images/bg-intro-desktop.svg";
import IntroMobile from "../../assets/images/bg-intro-mobile.svg";

export default function header() {
  return (
    <header>
      {/* C'est lui qui déborde la page */}
        <div className="flex flex-col-reverse mr-0 lg:flex-row bg-slate-50">
            <div className="flex flex-col justify-center w-full p-4 m-10 text-left lg:w-1/2">
                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">Next generation digital banking</h1>
                <p className="my-5 text-slate-400">
                Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.
                </p>
                <Button>Request Invite</Button>
            </div>

            <div className="flex justify-center w-full p-4 -mt-8 lg:w-1/2 lg:justify-end bg-[url(/src/assets/images/bg-intro-desktop.svg)]">
                <img src={Image} alt="Image Mockups" className="h-auto max-w-full" />
            </div>
        </div>
    </header>
  )
}
