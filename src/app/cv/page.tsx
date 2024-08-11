import HeaderCv from "../../components/cv/HeaderCv";
import Rightcolumn from "@/components/cv/Rightcolumn";

export default function HomeCV(){
    return(
        <>
            <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <HeaderCv />
                </div>
                <div>
                    <Rightcolumn />
                </div>
            </div>
        </>
    )
}