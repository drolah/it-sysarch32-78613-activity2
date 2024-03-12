import Content from './Content.jsx'

function Student(){
    

    
    return (
        <body className = "cardBody">

            <div>
                {Content().map((card, index) => (
                    <div key={index} className="card">
                        <img className="image" src={card.image} alt={card.name} />
                        <h2 className="name">{card.name}</h2>
                        <p className="email">{card.email}</p>
                    </div>
                ))}
            </div>
        </body>
    );

}
export default Student