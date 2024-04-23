import { CSSProperties, useMemo } from "react";

export type ListMenuType = {
    home?: string;
    text?: string;

    listMenuAlignSelf?: CSSProperties["alignSelf"];
    listMenuWidth?: CSSProperties["width"];
    homeIconOverflow?: CSSProperties["overflow"];
    textColor?: CSSProperties["color"];
};

const ListMenu = ({
    home,
    text,
    listMenuAlignSelf,
    listMenuWidth,
    homeIconOverflow,
    textColor,
} : any) => {
    const listMenuStyle: CSSProperties = useMemo(() => {
        return {
            alignSelf: listMenuAlignSelf,
            width: listMenuWidth,
        };
    }, [listMenuAlignSelf, listMenuWidth]);

    const listIconStyle: CSSProperties = useMemo(() => {
        return {
            overflow: homeIconOverflow,
        };
    }, [homeIconOverflow]);

    const textStyle: CSSProperties = useMemo(() => {
        return {
            color: textColor,
        };
    }, [textColor]);

    return (
        <div 
            className="rounded-lg flex flex-col items-start justify-start p-4 text-left text-base text-gray-600 font-body-l-medium"
            style={listMenuStyle}
        >
            <div className="w-[186px] h-6 flex flex-row items-center justify-start gap-2">
                <img 
                    className="w-6 h-6"
                    alt=""
                    src={home}
                    style={listIconStyle}
                />
                <div className="leading-6 font-medium" style={textStyle}>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default ListMenu;
