import Carousal from "./carousal";
import NavBar from "./navbar";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <NavBar />
            <Carousal />
        </div>
    )
}
export default HomePage;