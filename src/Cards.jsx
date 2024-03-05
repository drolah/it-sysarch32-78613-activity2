function Cards(){

    const cardData = [
        { name: "Kuya Kim", email: "kuyakim143@gmail.com", image: "https://tse1.mm.bing.net/th?id=OIP.5RnLOxTtjxQstour5tEz2gHaFj&pid=Api&P=0&h=180"},
        { name: "Kuya Kim", email: "kuyakim143@gmail.com", image: "https://tse1.mm.bing.net/th?id=OIP.5RnLOxTtjxQstour5tEz2gHaFj&pid=Api&P=0&h=180"},
        { name: "Kuya Kim", email: "kuyakim143@gmail.com", image: "https://tse1.mm.bing.net/th?id=OIP.5RnLOxTtjxQstour5tEz2gHaFj&pid=Api&P=0&h=180"},
        { name: "Kuya Kim", email: "kuyakim143@gmail.com", image: "https://tse1.mm.bing.net/th?id=OIP.5RnLOxTtjxQstour5tEz2gHaFj&pid=Api&P=0&h=180"},
        { name: "Kuya Kim", email: "kuyakim143@gmail.com", image: "https://tse1.mm.bing.net/th?id=OIP.5RnLOxTtjxQstour5tEz2gHaFj&pid=Api&P=0&h=180"}
    ];
    
    return (
        <body className = "cardBody">

            <div>
            {cardData.map((card, index) => (
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
export default Cards