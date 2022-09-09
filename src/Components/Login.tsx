function Login(){
    return(<div className="min-h-4 font-quicksand text-primary-white-color">
        <h1 className="mt-6 uppercase h-12 font-bold text-3xl sm:text-lg sm:p-2 pl-3 p-1 bg-primary-red-color w-full">Login</h1>
        <div className="flex flex-col items-center mt-20 gap-6 justify-center">
            <input name="email" type="email" placeholder="E-Mail" className="h-12 w-1/2 pl-4 text-primary-black-color focus:outline-primary-red-color"/>
            <input name="password" type="password" placeholder="Password" className="h-12 w-1/2 pl-4 text-primary-black-color focus:outline-primary-red-color"/>
            <div className="flex gap-6 items-center w-1/2">
                <button className="bg-primary-red-color w-20 h-9 rounded-2xl active:scale-95">Login</button>
                <p>Sign Up</p>
            </div>
        </div>
        
    </div>)
}
export default Login;