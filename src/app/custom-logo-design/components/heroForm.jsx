import Input from "C/Input";
import Select from "C/Select";
import Button from "C/Button";

const HeroForm = () => {
    let servicesArray = ["SEO", "PPC Marketing", "Social Media Management", "Reputation Management", "Content Marketing", "Web Design Development", "Other"];
    return (
        <div className="bg-red py-10">
            <form autoComplete="off" spellCheck="false" className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container">
                <div className="border-b-2 border-white relative">
                    <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">Hi, my name is</span>
                    <Input
                        name="name"
                        border="border-none"
                        padding="pl-[110px] pr-5"
                        color="text-white"
                    />
                </div>
                <div className="border-b-2 border-white relative">
                    <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">You can contact me at</span>
                    <Input
                        name="phone"
                        type="phone"
                        border="border-none"
                        padding="pl-[165px] pr-5"
                        color="text-white"
                    />
                </div>
                <div className="border-b-2 border-white relative">
                    <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">or by email at</span>
                    <Input
                        name="email"
                        type="email"
                        border="border-none"
                        padding="pl-[100px] pr-5"
                        color="text-white"
                    />
                </div>
                <div className="border-b-2 border-white relative">
                    <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">Interested in</span>
                    <Select
                        options={servicesArray}
                        name="industry"
                        border="border-none"
                        padding="pl-[100px] pr-5"
                        color="text-white"
                    />
                </div>
                <div className="border-b-2 border-white relative">
                    <span className="text-[15px] font-medium text-white absolute top-0 left-0 bottom-0 flex items-center">Tell Us your story</span>
                    <Input
                        name="message"
                        type="test"
                        border="border-none"
                        padding="pl-[130px] pr-5"
                        color="text-white"
                    />
                </div>
                <Button
                    text="Get A Free Quote"
                    border="border-none"
                    color="text-white"
                    bg="bg-light-yellow"
                />
            </form>
        </div>
    )
}

export default HeroForm;