let imagesList = [
	{
		img: "https://cdn.pixabay.com/photo/2017/01/23/09/21/learn-2001838_960_720.jpg",
		title: 'A CHALLENGE',
		text: 'This is the first challenge I and my classmates of the second stage of VNW Course were submitted. I took the advantage of a project I had done to do this challenge.'

	},
	{ 
		img: 'https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg',
		title: 'AN INITIAL EXAMPLE',
		text: 'This is just an example that I got from the internet to show the JS code'

	},
	{
		img: 'https://as1.ftcdn.net/jpg/01/87/07/58/500_F_187075892_2YDNhbbk2W7Mzd9iP8XFiYXHaQcnwgvo.jpg',
		title: 'AN AIM TO ACHIVE',
		text: 'My aim: an attractive code to achieve the best of JS to be the best for all the world and humanity'
	},
	{
		img: 'https://cdn.pixabay.com/photo/2016/09/26/09/08/binary-1695475_960_720.jpg',
		title: 'GLOBE IN PROGRAM',
		text: 'World has become totally envolved by internet, its codes and the artificial intelligence'
	}
]

let counter=0

let left = document.getElementById('left')
let img = document.getElementById('img')
let right = document.getElementById('right')

let title = document.getElementById('h1')
let text = document.getElementById("p")

left.addEventListener('click', function(){
	console.log('click')
	if (counter > 0) {
		counter = counter - 1;
		img.setAttribute('src', imagesList[counter].img);
	}else {
		counter = 3
		img.setAttribute('src', imagesList[counter].img);
	}
})

right.addEventListener('click', function(){
	if (counter < 3) 
	{
		counter = counter + 1;
		img.setAttribute('src', imagesList[counter].img);

	}else {

		counter = 0
		img.setAttribute('src', imagesList[counter].img);
	}
})

