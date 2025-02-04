export interface SubFeatureInterface {
	icon: any;
	title: string;
	description: string;
}
export interface FeatureInterface {
	title: string;
	icon?: any;
	subFeatures: Array<SubFeatureInterface>;
}

export interface MessageOptionsInterface {
    type: 'info' | 'success' | 'warning' | 'error' | 'default';
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
    closeButton?: any;
    autoClose?: number | false;
    hideProgressBar?: boolean;
    Theme?: 'light' | 'dark' | 'colored';
    closeOnClick?: boolean,
    pauseOnHover?: boolean,
    draggable?: boolean,
    progress?: any,
    style?: any;
    progressStyle?: any;
}