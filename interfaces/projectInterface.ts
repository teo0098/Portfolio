export default interface ProjectInterface {
    imageSrc: string;
    smallImageSrc: string;
    heading: string;
    desc: string;
    technologies: Array<{ name: string, icon: JSX.Element, size: string }>;
    previewUrl: string;
    codeUrl: string;
    index?: number;
}