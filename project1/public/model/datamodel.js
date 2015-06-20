var couple = {
	brideName: String,
	groomName: String,
	story: String,
	_id: String
};

var wedding = {
	date: String,
	time: String,
	location: String,
	description: String,
	coupleId: String, // relationship to couple
	_id: String
};

var reception = {
	date: String,
	time: String,
	location: String,
	description: String,
	weddingId: String, // relationship to wedding
	_id: String
};

var registry = {
	link: String,
	weddingId: String, // relationship to wedding
	_id: String
};

var photos = {
	imgUrl: String,
	caption: String,
	weddingId: String, // relationship to wedding
	_id: String
};

var guests = {
	guestName: String,
	email: String,
	weddingId: String, // relationship to wedding
	_id: String
};
