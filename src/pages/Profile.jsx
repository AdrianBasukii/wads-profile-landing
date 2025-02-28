import HomeContainer from "../components/homecontainer"
import Navbar from "../components/navbar"
import PageWrapper from "../components/pagewrapper"
import FlexContainer from "../components/flexcontainer"
import ProfileContainer from "../components/profilecontainer"

export default function Profile(){
    return(
        <PageWrapper>
            <Navbar/>
            <FlexContainer>
                <ProfileContainer/>
            </FlexContainer>
        </PageWrapper>
    )
}