import Settings from "./widgets/header/settings/settings/Settings";

import ProjectCard from "./shared/ui/project-card/ProjectCard";

import TextFormattingToolbar from "./shared/ui/text-formatting-toolbar/TextFormattingToolbar";


const App = () =>  {
    return <>
        <ProjectCard imageUrl={'https://ir-3.ozone.ru/s3/multimedia-m/c1000/6726566866.jpg'} lastEntryTime={new Date(2024, 9)} isRemoved={false}  />
        
        <TextFormattingToolbar />
    </>;
}

export default App;
