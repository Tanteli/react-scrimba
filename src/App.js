import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Description from "./components/Description"
import TodoItems from "./components/TodoItems"
import ContactCard from "./components/ContactCard"
import Joke from "./components/Joke"
import jokesData from './jokesData'
import vschoolProducts from './vschoolProducts'
import Product from './components/Product'
import TodoList from './components/TodoList'
import todosData from './todosDatas'

function App() {

    // TO DO ITEMS
    const todoItems = todosData.map(item => 
    <TodoList key={item.id} item={item}/>)

   //SCHOOL PRODUCT
    const productCompoments = vschoolProducts.map(item =>        
        <Product 
        key={item.id} product={item}        
        />
        )

    //JOKE
    const jokeComponents = jokesData.map (joke =>         
            <Joke 
            key={joke.id} // key is asked in a map
            question={joke.question}
            punchLine={joke.punchLine}
            />       

    )

    console.log(jokesData)

    return (
        <div>
            <nav>
                <Header />               
            </nav>
            
            <div className="todo-list">
            {todoItems}
            </div>
            
            <div>
                {productCompoments}
            </div>

            <div>
                {jokeComponents}
            </div>
                            
            <main>            


            <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
            
            <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            
            <ContactCard 
                 contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            
            <ContactCard 
               contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />


                 <Description />
                 <TodoItems />
                 <Joke punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
            
            <Joke 
                question="What's the best thing about Switzerland?" 
                punchLine="I don't know, but the flag is a big plus!"
            />
            
            <Joke 
                question="Did you hear about the mathematician who's afraid of negative numbers?" 
                punchLine="He'll stop at nothing to avoid them!"
            />
            
            <Joke 
                question="Hear about the new restaurant called Karma?" 
                punchLine="There’s no menu: You get what you deserve."
            />
            
            <Joke 
                question="Did you hear about the actor who fell through the floorboards?" 
                punchLine="He was just going through a stage."
            />
            
            <Joke 
                question="Did you hear about the claustrophobic astronaut?" 
                punchLine="He just needed a little space."
            />
            </main>
                <Footer />
        </div>
    )
}

export default App