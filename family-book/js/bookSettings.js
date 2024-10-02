flippingBook.pages = [
	"pages/family-book-1.jpg",
	"pages/family-book-2.jpg",
	"pages/family-book-3.jpg",
	"pages/family-book-4.jpg",
	"pages/family-book-5.jpg",
	"pages/family-book-6.jpg",
	"pages/family-book-7.jpg",
	"pages/family-book-8.jpg",
	"pages/family-book-9.jpg",
	"pages/family-book-10.jpg",
	"pages/family-book-11.jpg",
	"pages/family-book-12.jpg",
	"pages/family-book-13.jpg",
	"pages/family-book-14.jpg",
	"pages/family-book-15.jpg",
	"pages/family-book-16.jpg",
	"pages/family-book-17.jpg",
	"pages/family-book-18.jpg"
];


flippingBook.contents = [
	[ "Cover", 1 ],
	[ "Old Documents", 4 ],
	[ "Family tree", 8 ],
	[ "History of your family", 12 ],
	[ "Find the origin", 16 ]
];

// define custom book settings here
flippingBook.settings.bookWidth = 826;
flippingBook.settings.bookHeight = 584;
flippingBook.settings.pageBackgroundColor = 0x5b7414;
flippingBook.settings.backgroundColor = 0x83a51c;
flippingBook.settings.zoomUIColor = 0x919d6c;
flippingBook.settings.useCustomCursors = false;
flippingBook.settings.dropShadowEnabled = false,
flippingBook.settings.zoomImageWidth = 992;
flippingBook.settings.zoomImageHeight = 1403;
flippingBook.settings.downloadURL = "pdf/family-book.pdf";
flippingBook.settings.flipSound = "sounds/02.mp3";
flippingBook.settings.flipCornerStyle = "first page only";
flippingBook.settings.zoomHintEnabled = true;

// default settings can be found in the flippingbook.js file
flippingBook.create();
