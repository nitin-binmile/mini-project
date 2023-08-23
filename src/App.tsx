import "./App.css";
import { FeatureImage } from "./components/FeatureImage";
import { Header } from "./components/Header";
import { SearchJob } from "./components/SearchJob";

function App() {
  return <div className="flex flex-col px-[10px] md:px-[40px] gap-[40px] lg:px-[40px] pt-[10px]">
    <Header/>
    <div className="flex flex-col justify-center items-center text-[9px] lg:flex-row lg:text-[15px] lg:justify-between gap-[30px]">
       <SearchJob/>
       <FeatureImage/>
    </div>
  </div>

}

export default App;
