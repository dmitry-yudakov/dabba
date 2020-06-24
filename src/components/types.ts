type ComponentStyle = "orange" | "blue";
type ComponentSize = "small" | "medium" | "big";

export interface IButton {
    onClick?: () => void;
    style?: ComponentStyle;
    classNames?: string;
    children?: string | JSX.Element;
}

export interface ICartItem {
    position: IDish;
    amount: number;
    handleDelete: Function;
}

export interface ICounter {
    initialValue: number;
    step: number;
    limit: number;
    func: Function;
    style: ComponentStyle;
    classNamesBox: string;
    classNamesText: string;
    classNames: string;
    size: ComponentSize;
}

export interface IInput {
    name: string;
    style?: ComponentStyle;
    classNames?: string;
    classNamesBox?: string;
    onChange?: (val: React.ChangeEvent) => void;
    children?: React.ReactNode;
    type?: string;
    inputName?: string;
}

export interface IStatus {
    classNames: string | number;
    trueMessage: string | number;
    falseMessage: string | number;
    current: boolean;
}

export interface IToggle {
    onClick?: Function;
    classNames: string;
    style: ComponentStyle;
}

export interface IBinContext {
    items: Map<object, any>;
    addPosition: (id: IDish) => void;
    removePosition: (id: IDish) => void;
    countPositions: () => number;
}

export interface IPosition {
    name: string;
    link: string;
    ingridients: string;
    cost: number;
    id: IDish;
    weight: number;
}

export interface IDish {
    pictureUrl?: string;
    name?: string;
    description?: string;
    weigh?: number | string;
    price?: number;
}

export interface ITime {
    openTime: string;
    closeTime: string;
}

export interface IInfo {
    rating: number;
    contactPhone: string;
    kitchenType: string;
    email: string;
}

export interface IHeader {
    data: {
        name: string;
        address: string;
        logoUrl: string;
        contactPhone: string;
        kitchenType: string;
        email: string;
        openTime: string;
        closeTime: string;
    };
}
