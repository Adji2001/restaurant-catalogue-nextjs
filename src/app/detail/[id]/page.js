import RestaurantItem from "@/components/RestaurantItem"

async function getDetail(id) {
    const res = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`)

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Detail({ params: { id } }) {
    const { restaurant } = await getDetail(id)
    // console.log('resta', restaurant)
    const { name, description, pictureId, menus: { foods, drinks } } = restaurant;

    return (
        <div className='pt-12'>
            <img src={`https://restaurant-api.dicoding.dev/images/large/${pictureId}`} alt={name} />

            <header className="mt-3">
                <h1 className="text-4xl font-bold my-2">{name}</h1>
                <p>{description}</p>
            </header>

            <br />

            <main className="mt-3">
                <h2 className="text-2xl font-semibold my-2">Informasi Menu</h2>

                <h3 className="text-xl my-2 font-bold text-blue-100">Makanan</h3>
                <ul>
                    {foods.map((food) => (
                        <li key={food.name}>• {food.name}</li>
                    ))}
                </ul>

                <h3 className="text-xl my-2 font-bold text-blue-100">Minuman</h3>
                <ul>
                    {drinks.map((drink) => (
                        <li key={drink.name}>• {drink.name}</li>
                    ))}
                </ul>
            </main>
        </div>
    )
}