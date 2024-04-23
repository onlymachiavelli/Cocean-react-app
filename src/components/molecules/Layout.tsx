// import React from "react";
// // import InventoryPriceChange from "./InventoryPriceChange";

// const InventoryLayout = () => {
//     return (
//         <div className="absolute top-[419px] left-[256px] w-[1178px] h-[928px] overflow-y-auto flex flex-col items-start justify-start py-0 px-8 box-border gap-[16px] text-left text-sm text-default-gray-900 font--sp-body-1-roboto">
//             <div className="w-[1135px] flex flex-row items-center justify-between">
//                 <div className="flex flex-row items-center justify-start gap-[8px]">
//                     <div className="flex flex-row items-start justify-start">
//                         <div className="relative tracking-[0.1px] leading-[20px] font-medium">
//                             Show inactive products
//                         </div>
//                     </div>
//                     <div className="w-[43px] rounded-sm bg-dodgerblue h-3.5 flex flex-row items-center justify-end">
//                         <div className="w-5 relative shadow-[0px-1px-1px-rgba(0,0,0,0.2),0px 2px 2px rgba(0,0,0,0.14),0px 1px 5px rgba(0,0,0,0.1)] rounded-[50%] bg-primary h-5" />
//                     </div>
//                 </div>
//                 <div className="flex flex-row items-start justify-start gap-[8px] text-primary">
//                     <div className="flex flex-row items-start justify-start">
//                         <div className="rounded overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-primary-shades-5p">
//                             <div className="overflow-hidden flex flex-col items-start justify-start py-1.5 px-4">
//                                 <div className="flex flex-row items-center justify-start gap-[8px]">
//                                     <img
//                                         className="w-6 relative h-6 overflow-hidden shrink-0"
//                                         alt=""
//                                         src="/iconsfilecsv.svg"
//                                     />
//                                     <div className="relative tracking-[0.4px] leading-[24px] uppercase font-medium">
//                                         Export
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="rounded overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-light-primary-shades-50p">
//                         <div className="overflow-hidden flex flex-col items-start justify-start py-1.5 px-4">
//                             <div className="flex flex-row items-center justify-start gap-[8px]">
//                                 <img
//                                     className="w-6 relative h-6 overflow-hidden shrink-0"
//                                     alt=""
//                                     src="/iconsfile.svg"
//                                 />
//                                 <div className="relative tracking-[0.4px] leading-[24px] uppercase font-medium">
//                                     Filters
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-row items-center justify-start gap-[8px] text-center">
//                     <div className="relative tracking-[0.1px] leading-[20px] font-medium">
//                         Select Timeframe
//                     </div>
//                     <div className="rounded overflow-hidden flex flex-row items-start justify-start text-primary border-[1px] border-solid border-light-primary-shades-50p">
//                         <div className="overflow-hidden flex flex-col items-center justify-center py-2 px-4 border-[1px] border-solid border-light-primary-shades-50p">
//                             <div className="relative leading-[20px] font-medium">
//                                 Day over Day
//                             </div>
//                         </div>
//                         <div className="bg-primary overflow-hidden flex flex-col items-center justify-center py-2 px-4 text-default-white border-solid border-light-primary-shades-50p">
//                             <div className="relative leading-[20px] font-medium">
//                                 Week over Week
//                             </div>
//                         </div>
//                         <div className="bg-primary overflow-hidden flex flex-col items-center justify-center py-2 px-4 text-default-white border-solid border-light-primary-shades-50p">
//                             <div className="relative leading-[20px] font-medium">
//                                 Month over Month
//                             </div>
//                         </div>
//                         <div className="bg-primary overflow-hidden flex flex-col items-center justify-center py-2 px-4 text-default-white border-solid border-light-primary-shades-50p">
//                             <div className="relative leading-[20px] font-medium">
//                                 Custom Date Range
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-[1135px] flex flex-row items-start justify-start gap-[16px] text-xl text-default-gray-800">
//                 <b className="flex-1 relative leading-[24px]">Inventory</b>
//                 <div className="relative text-base leading-[24px]">
//                     <span>{'Week over Week Compress: '}</span>
//                     <b>22.03.2024 - 28.03.2024</b>
//                     <span>{' to the previous week '}</span>
//                     <b>22.04.2024 - 28.04.2024</b>
//                 </div>
//             </div>
//             <div className="flex flex-row items-center justify-start gap-[8px] text-center">
//                 <div className="relative tracking-[0.1px] leading-[20px] font-medium">
//                     Filters:
//                 </div>
//                 <div className="rounded-2xl bg-default-gray-300 overflow-hidden flex flex-row items-center justify-start py-1 px-2 gap-[6px]">
//                     <div className="relative leading-[24px]">ccc</div>
//                     <img
//                         className="w-4 relative h-4 overflow-hidden shrink-0"
//                         alt=""
//                         src="/iconsclose.svg"
//                     />
//                 </div>
//             </div>
//             <div className="w-[1181px] filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25)) flex flex-col items-end justify-start py-0 px-[46px] box-border text-grey-darken-1">
//                 <div className="w-[1086px] rounded box-border flex flex-row items-start justify-start border-solid border-default-gray-200">
//                     <div className="flex-1 flex-col items-start justify-start">
//                         <div className="w-[1021px] overflow-auto flex flex-row items-start justify-start">
//                             <div className="bg-default-gray-100 flex flex-col items-start justify-start gap-[1px] text-lg font-material-icons">
//                                 <div className="self-stretch bg-default-gray-100 h-[52px] flex flex-row items-center justify-start py-4 px-2 box-border">
//                                     <div className="w-[18px] relative leading-[100%] hidden">
//                                         arrow-upward
//                                     </div>
//                                 </div>
//                                 <div className="self-stretch bg-default-white h-[52px] flex flex-row items-center justify-start py-4 px-2 box-border">
//                                     <img 
//                                     className="w-6 relative h-6 overflow-hidden shrink-05 object-contain"
//                                     alt=""
//                                     src="/bxchevrnup.svg"
//                                     />
//                                 </div>
//                                 <div className="self-stretch bg-default-white h-[52px] flex flex-row items-center justify-start py-4 px-2 box-border">
//                                 <img 
//                                     className="w-6 relative h-6 overflow-hidden shrink-05 object-contain"
//                                     alt=""
//                                     src="/bxcevronup1@2.png"
//                                     />
//                                    </div>
//                                    <div className=""
//                                 <div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
        
//     )
// }

// export default InventoryLayout;
