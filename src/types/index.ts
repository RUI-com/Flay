export type ButtonProps = {
    type:'button' | 'submit';
    title : string;
    icon?:string;
    variant:'btn_dark_green' | 'btn_green' | 'btn_white_text' | 'btn_white' | 'btn_dark_green_outline';
    full?: boolean;
}

export interface CampProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
  }

export type FeatureItemProps = {
    title: string;
    icon: string;
    description: string;
  }
export type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
  }