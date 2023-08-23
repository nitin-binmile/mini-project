export type NavItemProps = {
    text: string;
}

export type ButtonPropsType = {
    children:React.ReactNode;
    mode: 'primary'|'secondary';
    onClick?: () => void;
    pointer?:boolean
}

export type SearchState=string