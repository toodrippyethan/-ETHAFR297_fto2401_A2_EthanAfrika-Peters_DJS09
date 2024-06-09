// Classes
// As with other JavaScript language features, TypeScript adds type
// annotations and other syntax to allow you to express relationships
// between classes and other types.
// 1. Add a Class that will let us create a main image, it should allow us to
// store the reviews, the src and title.

import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from './utils';
import { Price, Country } from './types';
import { Review } from './interfaces';
import { Permissions, LoyaltyUser } from './enums';
const propertyContainer = document.querySelector('.properties') as HTMLElement;
const reviewContainer = document.querySelector('.reviews') as HTMLElement;
const container = document.querySelector('.container') as HTMLElement;
const button = document.querySelector('button') as HTMLElement;
const footer = document.querySelector('.footer') as HTMLElement;

let isLoggedIn: boolean;

// Reviews
const reviews: Review[] = [
	{
		name: 'Sheia',
		stars: 5,
		loyaltyUser: LoyaltyUser.GOLD_USER,
		date: '01-04-2021',
	},
	{
		name: 'Andrzej',
		stars: 3,
		loyaltyUser: LoyaltyUser.BRONZE_USER,
		date: '28-03-2021',
	},
	{
		name: 'Omar',
		stars: 4,
		loyaltyUser: LoyaltyUser.SILVER_USER,
		date: '27-03-2021',
	},
];

const you = {
	firstName: 'Bobby',
	lastName: 'Brown',
	permissions: Permissions.ADMIN,
	isReturning: true,
	age: 35,
	stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};

// Array of Properties
const properties: {
	image: string;
	title: string;
	price: number;
	location: {
		firstLine: string;
		city: string;
		code: number;
		country: string;
	};
	contact: [number, string];
	isAvailable: boolean;
}[] = [
	{
		image: './images/colombia-property.jpg',
		title: 'Colombian Shack',
		price: 45,
		location: {
			firstLine: 'shack 37',
			city: 'Bogota',
			code: 45632,
			country: 'Colombia',
		},
		contact: [+112343823978921, 'marywinkle@gmail.com'],
		isAvailable: true,
	},
	{
		image: './images/poland-property.jpg',
		title: 'Polish Cottage',
		price: 34,
		location: {
			firstLine: 'no 23',
			city: 'Gdansk',
			code: 343903,
			country: 'Poland',
		},
		contact: [+1298239028490830, 'garydavis@hotmail.com'],
		isAvailable: false,
	},
	{
		image: './images/london-property.jpg',
		title: 'London Flat',
		price: 23,
		location: {
			firstLine: 'flat 15',
			city: 'London',
			code: 35433,
			country: 'United Kingdom',
		},
		contact: [+34829374892553, 'andyluger@aol.com'],
		isAvailable: true,
	},
];

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

// Add the properties
for (let i = 0; i < properties.length; i++) {
	const card = document.createElement('div');
	card.classList.add('card');
	card.innerHTML = properties[i].title;
	const image = document.createElement('img');
	image.setAttribute('src', properties[i].image);
	card.appendChild(image);
	showDetails(you.permissions, card, properties[i].price);
	propertyContainer.appendChild(card);
}

//Broken code
let count = 0;
function addReviews(
	array: {
		name: string;
		stars: number;
		loyaltyUser: LoyaltyUser;
		date: string;
	}[]
): void {
	if (!count) {
		count++;
		const topTwo = getTopTwoReviews(array);
		for (let i = 0; i < topTwo.length; i++) {
			const card = document.createElement('div');
			card.classList.add('review-card');
			card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
			reviewContainer.appendChild(card);
		}
		container.removeChild(button);
	}
}

button.addEventListener('click', () => addReviews(reviews));

let currentLocation: [string, string, number] = ['London', '11.03', 17];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';

//Classes
// class Car {
//     make: string
//     year: number
//     color: string
//     constructor(make: string, year: number, color: string) {
//         this.make = make
//         this.year = year
//         this.color = color
//     }
// }

class MainProperty {
	src: string;
	title: string;
	reviews: Review[];
	constructor(src: string, title: string, reviews: Review[]) {
		this.src = src;
		this.title = title;
		this.reviews = reviews;
	}
}