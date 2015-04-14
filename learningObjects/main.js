var booksToRead = {

	Book1: {
		BookName: 'Why Im Still Single',
		Author: 'Winona Ryder', 
		DateToRead: 'April 2015',
		RelationshipStatus: 'Single as a Goat',
	},

	Book2: {
		BookName: 'How to trick your crush into leaving his wife',
		Author: 'Angelina Jolie',
		DateToRead: 'August 2015',
		RelationshipStatus: 'Manipulative Almost Girlfriend',
	},

	Book3: {
		BookName: 'Planning Your Perfect Wedding',
		Author: 'Lauren Conrad',
		DateToRead: 'September 2015',
		RelationshipStatus: 'Engaged',
	},

	Book4: {
		BookName: 'What to Expect When Youre Expecting',
		Author: 'John and Kate Plus Eight',
		DateToRead: 'April 2016',
		RelationshipStatus: 'Unhappily Married',
	},

	Book5: {
		BookName: 'How to Kill Your Husband in Divorce',
		Author: 'Denise Richards',
		DateToRead: 'August 2016',
		RelationshipStatus: 'Almost Divorced',
	},


	Book6: {
		BookName: 'Get Through Worlds Shortest Marriage',
		Author: 'Britney Spears',
		DateToRead: 'October 2016',
		RelationshipStatus: 'Single and on the prowl',
	},

}

// for (var contact in contactList) {
// 	var contactInfo = contactList[contact];

// 	//step 1 - make the contrainer (div)
// 	var container = document.createElement('div');

// 	var title = document.createElement('h3');

// 	title.innerHTML = 'My contact is named'

// 	var paragraph = document.createElement('p');
// 	paragraph.innerHTML = 'My Contact is named ' + contactInfo.firstName;
// 	document.body.appendChild(paragraph);
// }

for (var books in booksToRead) {
	var booksInfo = booksToRead[books];


	//step 1 - make the contrainer (div)
	var container = document.createElement('div');

	var paragraph1 = document.createElement('h1');
	paragraph1.setAttribute("class", "hello");
	paragraph1.innerHTML = 'When your relationship status is ' + booksInfo.RelationshipStatus;
	document.body.appendChild(paragraph1);

	var bookTitle = document.createElement('h3');
	bookTitle.setAttribute("class", "bookTitleStyle");

	bookTitle.innerHTML = 'read the book ' + booksInfo.BookName + ' written by ' + booksInfo.Author;
	document.body.appendChild(bookTitle);
}

