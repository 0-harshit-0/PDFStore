const apiKey = "AIzaSyAgBUAbWkCu40aSrIRnaANu5lg6tJEtq7M";
const searchID = "69d85c433611b6055";

let tinp = document.querySelector("#titleInput");
let search = document.querySelector("#submit");
let res = document.querySelector("#result");

let url;
function print(data) {
	for (var i = 0; i < data.items.length; i++) {
		if (data.items[i].fileFormat == "PDF/Adobe Acrobat") {
			let li = document.createElement("li");
			li.innerHTML = `<a href=${data.items[i].link} target="_blank">${data.items[i].title}</a>`;
			res.appendChild(li);
		}
	}
}
search.onclick = () => {
	url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchID}&q=intitle:${tinp.value} filetype:pdf`;
	
	fetch(url).then((response) => {
		response.json().then((data) => {
			//console.log(data);
			print(data);
		});
	})
}

