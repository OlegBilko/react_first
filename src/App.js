import './App.css';
import Character from "./components/Character";

function App() {

    return (
        <div className={'wrap'}>

            <Character
                id={1}
                name={"Ants in my Eyes Johnson"}
                status={'unknown'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/20.jpeg'}
            />

            <Character
                id={2}
                name={"Annie"}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={"https://rickandmortyapi.com/api/character/avatar/17.jpeg"}
            />

            <Character
                id={3}
                name={"Alexander"}
                status={'Dead'}
                species={'Human'}
                gender={'Male'}
                image={"https://rickandmortyapi.com/api/character/avatar/12.jpeg"}
            />

            <Character
                id={4}
                name={"Adjudicator Rick"}
                status={'Dead'}
                species={'Human'}
                gender={'Male'}
                image={"https://rickandmortyapi.com/api/character/avatar/8.jpeg"}
            />

            <Character
                id={5}
                name={"Adjudicator Rick"}
                status={'Alive'}
                species={'Alien'}
                gender={'Female'}
                image={"https://rickandmortyapi.com/api/character/avatar/6.jpeg"}
            />

            <Character
                id={6}
                name={"Albert Einstein"}
                status={'Dead'}
                species={'Human'}
                gender={'Male'}
                image={"https://rickandmortyapi.com/api/character/avatar/11.jpeg"}
            />


        </div>
    );
}

export default App;
