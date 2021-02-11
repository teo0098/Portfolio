export default interface ProjectInterface {
    imageSrc: string;
    heading: string;
    desc: string;
    technologies: Array<{ name: string, icon: JSX.Element }>;
    previewUrl: string;
    codeUrl: string;
}