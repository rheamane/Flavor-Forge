import Link from "next/link";

export default function Home() {
	const categories = [
		{ name: "breakfast", icon: "local_cafe" },
		{ name: "fast food", icon: "fastfood" },
		{ name: "pizza", icon: "local_pizza" },
		{ name: "cocktails", icon: "local_bar" },
		{ name: "baked", icon: "bakery_dining" },
		// { "name": "healthy", "icon": "nutrition" },
	];

	return (
		<div>
			{/* Navbar */}
			<div className="navbar bg-base-100">
				<div className="flex-none">
					<a className="btn btn-ghost text-xl">FlavorForge</a>
				</div>
				<div className="flex-1 gap-2 text-neutral-content text-xs">
					<Link href={""} className="hover:underline">
						Categories
					</Link>
					<Link href={""} className="hover:underline">
						Collections
					</Link>
					<Link href={""} className="hover:underline">
						Cuisines
					</Link>
					<Link href={""} className="hover:underline">
						My Recipes
					</Link>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal">
						<li>
							<Link href={"/search"}>
								<span className="material-symbols-outlined">
									search
								</span>
							</Link>
						</li>
						<li>
							<Link href={"/account"}>
								<span className="material-symbols-outlined">
									account_circle
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* Hero - Recipe of the day */}
			<div
				className="hero"
				style={{
					backgroundImage:
						"url(https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg)",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content justify-self-start text-secondary-content">
					<div className="my-5 mx-5">
						<h3>Recipe of the day</h3>
						<h1 className="mb-3 text-5xl font-bold">
							Gochujang Noodles
						</h1>
						<button className="btn btn-primary uppercase">
							Make Recipe
						</button>
					</div>
				</div>
			</div>

			{/* Categories */}
			<div className="grid grid-flow-col auto-cols gap-2 justify-center my-5">
				{categories.map((category) => (
					<div key={category.icon}>
						<button className="btn btn-sm btn-outline capitalize">
							<span className="material-symbols-outlined">
								{category.icon}
							</span>
							{category.name}
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
