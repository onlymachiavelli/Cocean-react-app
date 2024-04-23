
const Tabs = () => {
    return (
        <div className="w-1125 bg-white flex items-start justify-center gap-8 text-center text-base text-gray-600 font-roboto">
            <div className="w-4 h-14 flex items-start justify-start p-4 border-b border-dashed border-gray-400">
                <div className="relative leading-24">{' '}</div>
            </div>
            <div className="h-14 flex items-start justify-start p-4 border-b border-dashed border-gray-400">
                <div className="relative leading-24">
                    All Inventory
                </div>
            </div>
            <div className="rounded-t bg-gray-50 h-14 flex items-start justify-start p-4 border-t border-r border-l border-gray-400">
                <b className="relative leading-24">
                    Rising Stars
                </b>
            </div>
            <div className="h-14 flex items-start justify-start p-4 border-b border-dashed border-gray-400">
                <div className="relative leading-24">
                    Heavy Decliners
                </div>
            </div>
            <div className="w-703 h-14 flex items-start justify-start p-4 border-b border-dashed border-gray-400">
                <div className="relative leading-24">{' '}</div>
            </div>
        </div>
    );
};

export default Tabs;
