import Link from "next/link"
import Nav from "./Nav"
import { Button } from "./button"
const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
           
                Shan <span className="text-accent">.</span>
                
                </h1>
        </Link>
        {/*desctop nav and hire me button*/}
        <div className="hidden xl:flex items-center gap-8"><Nav/>
        <Link href="/contact">
            <Button>Hire Me</Button>
        </Link>
        </div>

        {/*mobile nav*/}
        <div className="xl:hidden">
            mobile nav
        </div>
        
    </div>    
        
        
    </header>
  )
}

export default Header