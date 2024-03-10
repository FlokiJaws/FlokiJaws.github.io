const manga = [
	{
		titre: "tome 1",
		prix : 9.55,
		source : "./tome1.jpg"
	},
	{
		titre: "tome 2",
		prix : 9.55,
		source : "./tome1.jpg"
	},
	{
		titre: "tome 3",
		prix : 9.55,
		source : "./tome1.jpg"
	},
	{
		titre: "tome 4",
		prix : 9.55,
		source : "./tome1.jpg"
	},
	{
		titre: "tome 5",
		prix : 9.55,
		source : "./tome1.jpg"
	},
	{
		titre: "tome 6",
		prix : 9.55,
		source : "./tome1.jpg"
	},
	{
		titre: "tome 7",
		prix : 9.55,
		source : "./tome1.jpg"
	},
	{
		titre: "tome 8",
		prix : 9.55,
		source : "./tome1.jpg"
	},
	{
		titre: "tome 9",
		prix : 9.55,
		source : "./tome1.jpg"
	},
	{
		titre: "tome 10",
		prix : 9.55,
		source : "./tome1.jpg"
	}
]

function repeat(){
	const article = document.querySelector(".article")

	for (let hp of manga){
		let a = document.createElement("div")
		let b = document.createElement("div")
		b.classList.add("tomeContenu")

		let image = document.createElement("img")
		image.src = hp.source;
		image.classList.add("tome")
		a.append(image)

		let titre = document.createElement("h1")
		titre.innerText = hp.titre;
		titre.classList.add("tometitre")
		b.append(titre)

		a.classList.add("tomeCard")
		a.append(b)
		article.append(a)
	}
}

repeat()