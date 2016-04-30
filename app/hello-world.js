import RaziloBind from 'razilobind'

/**
 * Hello World Sample Application
 * Lets keep it ES6 sir, bind to your class instance!
 */
export default class HelloWorld {
    constructor(element) {
		// set up properties
		this.hello = 'This is a hello world app...';
		this.clicked = 0;

		// bind it, just bind it ;)
		let rb = new RaziloBind();
		rb.bind(element, this);
	}

	clickedIt() {
		this.clicked++;
	}

	moreThanOne(clicked) {
		return clicked > 1;
	}

	moreThanTen(clicked) {
		return clicked > 10;
	}

	labelClicked(clicked)
	{
		if (clicked < 2) return 'label-danger';
		if (clicked < 5) return 'label-warning';
		if (clicked < 10) return 'label-success';
		return 'label-default';
	}
}
