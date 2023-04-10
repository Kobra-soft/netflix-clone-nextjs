import Input from "@/components/input";


const Auth = () => {
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="p-[3.76rem] py-[1.4rem]">
                    <img src="/images/logo.png" alt="Logo" className="h-[1.55rem]" />
                </nav>
                {/* container */}
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;