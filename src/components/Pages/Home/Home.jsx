import Card from "../../Items/Card/Card";
import CardPrincipal from "../../Items/CardPrincipal/CardPrincipal";
const Home = () => {

    return (
        <>
            <div className="mt-1">
                <CardPrincipal />
            </div>
            <div className="flex flex-wrap gap-4 justify-evenly mt-1 mb-10 ">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Home;