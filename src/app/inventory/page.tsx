"use client"
import { SideBar } from "@/components/molecules"
const Page = () => {
  return (
    <>
      <main className="w-full h-auto min-h-screen flex items-center justify-center">
        <SideBar />
      </main>
    </>
  )
}

export default Page
/*


        <div className="w-full relative bg-grey-grey-50 h-[1469px] overflow-hidden text-left text-base text-grey-grey-400 font-body-l-medium">
            <div className="absolute top-0 left-[280px] bg-default-white box-border w-[11605px] h-[100px] border-[1px] border-solid border-whitesmoke-200" />
            <div className="absolute top-[28px] left-[280px] w-[1160px] flex flex-row items-center justify-between py-0 px-8 box-border">
                <div className="w-80 rounded box-border flex flex-row items-center justify-center py-2.5 px-4 gap-8 border-[1px] border-solid border-grey-grey-50">
                    <img className="w-6 relative leading-[24px]" src="/placeholder.png" alt="placeholder" />
                    <div className="relative leading-[24px]">Search product, supplier, order</div>
                </div>
                <div className="flex flex-row items-start jutify-start gap-[22px]">
                    <div className="flex flex-row items-start justify-start p-">
                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="/notification.svg" />
                    </div>
                    <img className="w-10 relative h-10 object-cover" alt="" src="/avatar@2x.png" />
                </div>
            </div>
            <InventoryContainer />
            <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-default-white box-border w-[280px] h-[1469px] flex flex-col items-start justify-between pt-6 px-6 pb-8 text-center text-[35px] border-r-[1px] border-solid border-grey-grey-50">
                <div className="flex flex-col items-start justify-start gap-[32px]">
                    <div className="w-[232px] flex flex-col items-start justify-center py-1 px-3 box-border">
                        <div className="flex flex-row items-center justify-start py-0 px-3">
                            <div className="flex flex-row items-center justify-center py-2 px-0 gap-[1px]">
                                <img className="w-1 relative h-12" alt="" src="/logo.svg" />
                                <div className="relative leading-[30px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-transparent via-transparent to-transparent">
                                    Global
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[232px] flex flex-row items-center justify-start py-2 px-4 box-border">
                        <div className="flex-l flex-col items-start justify-center gap-[12px]">
                            <ListMenu
                                home="/home.svg"
                                text="Dashboard"
                                listMenuAlignSelf="stretch"
                                listMenuWidth="unset"
                                homeIconOverflow="unset"
                                textColor="#5d6679"
                            />
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[12px]">
                            <ListMenu
                                home="/settings.svg"
                                text="Settings"
                                listMenuAlignSelf="unset"
                                listMenuWidth="232px"
                                homeIconOverflow="hidden"
                                textColor="#5d6679"
                            />
                            <ListMenu
                                home="/log-out.svg"
                                text="Log Out"
                                listMenuAlignSelf="unset"
                                listMenuWidth="232px"
                                homeIconOverflow="hidden"
                                textColor="#5d6679"
                            />
                        </div>
                    </div>
                    <div className="absolute top-[334px] left-[303px] bg-default-white w-[116px] h-14 flex flex-col items justify-end">
                        <InventoryTabs />
                    </div>
                </div>
        

*/
