<script>
// Requires jQuery

// Initialize slider:
$(document).ready(function () {

  $('.noUi-handle').on('click', function () {
    $(this).width(50);
  });

  var hSlider = $("#h-slider")[0];
  var vSlider = $("#v-slider")[0];

  noUiSlider.create($("#h-slider")[0], {
    start: [200, 500],
    behaviour: 'drag',
    connect: true,
    range: {
      'min': 0,
      'max': 1000
    }
  });

  noUiSlider.create($("#v-slider")[0], {
    start: [200, 500],
    behaviour: 'drag',
    orientation: 'vertical',
    connect: true,
    range: {
      'min': 0,
      'max': 1000
    }
  });
  // Set visual min and max values and also update value hidden form inputs
  //hSlider.noUiSlider.on('update', processSlider )
  hSlider.noUiSlider.on('drag', function () {
    processSlider.apply(this, [].slice.call(arguments).concat(['drag']));

  })

  hSlider.noUiSlider.on('slide', function () {
    // only trigger if its not a fixedDrag
    if (!this.target.classList.contains("noUi-state-fixedDrag")) {
      processSlider.apply(this, [].slice.call(arguments).concat(['slide']));
    }

  })
  //hSlider.noUiSlider.on('slide', processSlider )

  function processSlider(values, handle, unencoded, tap, positions, eventName) {
    // values: Current slider values (array);
    // handle: Handle that caused the event (number);
    // unencoded: Slider values without formatting (array);
    // tap: Event was caused by the user tapping the slider (boolean);
    // positions: Left offset of the handles (array);
    console.log(eventName, this.options.behaviour, this.target.classList.contains("noUi-state-fixedDrag"),
      values, handle, positions, hSlider.noUiSlider.options.range);
    //console.log(eventName, this.target.classList);
  }

  $("#test").click(function () {
    hSlider.noUiSlider.updateOptions({
      range: {
        'min': 0,
        'max': 2000
      }
    })
  })

});
</script>