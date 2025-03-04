import Header from "./Header"
import Footer from "./Footer"
import CallBtn from "./CallBtn"

function Blog(){
    return (
        <div className="blog">
            <Header active="3"/>
            <section className="blog__content app-item mt-114">

            </section>
            <CallBtn />
            <Footer />
        </div>
    )
}

export default Blog