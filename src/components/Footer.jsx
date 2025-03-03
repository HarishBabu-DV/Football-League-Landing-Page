import { Link } from "react-router"
import { footerContents } from "../assets/asset"

const Footer = () => {
  return (
    <footer className="w-full bg-white max-h-[70dvh] min-h-[60dvh] flex flex-col gap-y-8 py-8">
        {/* Footer Description */}
        <section className=" w-full flex items-center">
            {/* Address,Quick Links,Useful Links  */}
            <div className="flex w-[65%] justify-around">
                {/* Address  */}
                <div className="flex flex-col gap-y-4">
                    {/* Address heading  */}
                    <h3 className=" underline address-heading text-2xl font-medium">Address</h3>   
                    <div className="flex flex-col gap-y-10">
                        {   
                            footerContents.address.map((address)=>(
                                <p key={address.id} className="flex items-center gap-x-2 hover:underline hover:cursor-pointer">
                                    <span>{<address.iconContent className="text-lg" />}</span>
                                    <span className="w-[210px]">{address.description}</span>
                                </p>
                            ))
                        }
                    </div>
                </div>

                {/* Quick Links  */}
                <div className="flex flex-col gap-y-4">
                    {/* Address heading  */}
                    <h3 className=" underline address-heading text-2xl font-medium">Quick Links</h3>   
                    <div className="flex flex-col gap-y-4">
                        {   
                            footerContents.quick_links.map((quickLink)=>(
                                <Link to={'/'} className="font-medium hover:underline hover:cursor-pointer" key={quickLink.id}>{quickLink.linkContent}</Link>
                            ))
                        }
                    </div>
                </div>

                {/* Useful Links  */}
                <div className="flex flex-col gap-y-4">
                    {/* Address heading  */}
                    <h3 className=" underline address-heading text-2xl font-medium">Useful links</h3>   
                    <div className="flex flex-col gap-y-4">
                        {   
                            footerContents.useful_links.map((usefulLink)=>(
                                <Link to={'/'} className="hover:underline hover:cursor-pointer font-medium capitalize" key={usefulLink.id}>{usefulLink.linkContent}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* Football Clubs  */}
            <div className=" w-[35%] flex flex-col gap-4 ">
                {
                    footerContents.footBallClubs.map((footBallClub)=>(
                        <div key={footBallClub.id} style={footBallClub.id===2?{paddingLeft:"6rem"}:{paddingLeft:"5rem"}} className="w-full">
                            <div className="w-[250px] h-[150px]" >
                                <img src={footBallClub.imageContent} className="w-full h-full" alt=""/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
        {/* Social Media and copyright description  */}
        <section className="flex flex-col items-center">
            {/* Social Media description */}
            <div className="flex items-center justify-center gap-4">
                {
                    footerContents.socialMedia.map((socialMedia)=>(
                        <span key={socialMedia.id} className=" hover:scale-[1.2] transition-transform duration-200 hover:transition-transform hover:duration-200 hover:cursor-pointer">
                            {<socialMedia.iconContent className="text-3xl" />}
                        </span> 
                    ))
                }
            </div>
            {/* copyright description */}
            <p>
                {footerContents.copyRightContent}
            </p>
        </section>
    </footer>
  )
}

export default Footer