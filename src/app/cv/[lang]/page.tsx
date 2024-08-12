import LeftRight from "@/components/cv/LeftRight";
import Rightcolumn from "@/components/cv/Rightcolumn";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";

export default async function HomeCV({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
    const dictionary = await getDictionary(lang);
    return(
        <>
            <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <LeftRight dictionary={dictionary} />
                </div>
                <div>
                    <Rightcolumn dictionary={{ 
                        ...dictionary, 
                        exprience: dictionary.exprience?.map(item => ({
                            title: item.title,
                            company: item.company,
                            date_work: [], // Ubah ini sesuai kebutuhan
                            jobdesc: item.jobdesc,
                            address_work: item.address_work
                        })) 
                    }} />
                </div>
            </div>
        </>
    )
}