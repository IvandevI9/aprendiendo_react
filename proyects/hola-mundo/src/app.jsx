
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";


//Componente principal
function App() {

    //Objetos que se pasan como props
    const midudev = { initialIsFollowing: false, userName: "midudev" };
    const Ivan = { initialIsFollowing: true, userName: "Ivan_mx19" };

    const Users = [

        {
            userName: "MoureDev",
            name: "Brais Moure",
            initialIsFollowing: false
        },
        {
            userName: "_nasch_",
            name: "Nicolás Schürmann",
            initialIsFollowing: true
        }
    ]

    return (
        <section className="App">
            <TwitterFollowCard
                //props //rest operator
                {...midudev}
            >
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard
                //props //rest operator
                {...Ivan}
            >
                Ivan Cruz
            </TwitterFollowCard>

            <TwitterFollowCard
                //props
                userName="lopezobrador_"
                initialIsFollowing={false}
            >
                Andrés Manuel
            </TwitterFollowCard>

            {/* //Iteramos sobre el array de objetos */}
            {
                Users.map((user) => (
                    //Componente que se renderiza por cada objeto del array
                    <TwitterFollowCard
                        //props
                        key={user.userName}
                        userName={user.userName}
                        initialIsFollowing={user.initialIsFollowing}
                    >
                        {user.name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    );
}

export default App;
