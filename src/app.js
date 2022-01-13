$(window).ready(function (){
	const pageWidth = $(window).width();
	// random bubble number generation (30,40)
	const bubbleNo = Math.floor(Math.random() * 10 + 30);

	for (i = 0; i < bubbleNo; i++) {
		// bubble random styling generation
		// dimension: (70, 150)
		const randWidth = Math.random() * 80 + 70;
		// left position: (0, pageWidth-50)
		const randLeft = Math.random() * pageWidth;
		// animation-delay: (0, 15)
		const delayTimeVertical = Math.random() * 15;
		const delayTimeHorizental = Math.random() * 2;

		const stylingContainer = `"width: ${randWidth}px ; height: ${randWidth}px ; left: ${randLeft}px; animation-delay: ${delayTimeVertical}s; top: 100%"`;
		const stylingBubble = `"animation-delay: ${delayTimeHorizental}s"`;
		$("body").append(
			`<div class="container" style=${stylingContainer}>
        <div class='bubble' style=${stylingBubble}>
          <div class='light'>
          </div>
        </div>
      </div>`,
		);
	}
});
