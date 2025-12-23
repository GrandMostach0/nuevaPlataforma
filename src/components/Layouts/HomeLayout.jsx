import FooterBar from "./FooterBar"
import NavBar from "./NavBar"

const HomeLayout = ({Children}) => {
    return (
        <>
            <NavBar />

            <div>
                {Children}
            </div>

            <FooterBar />
        </>

    )
};

export default HomeLayout;