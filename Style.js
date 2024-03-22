window.onload = function() {
    var background = document.getElementById('background');
  
    var colors = ['#007bff', '#00ff00', '#ff00ff', '#ffff00'];
    var shapes = ['circle', 'square', 'triangle', 'star'];
  
    for (var i = 0; i < 40; i++) {
      var shape = document.createElement('div');
      shape.classList.add('shape');
      shape.style.backgroundColor = colors[i % colors.length];
      shape.style.animationDelay = (i * 0.1) + 's';
      shape.style.animationDuration = ((40 - i) * 0.1) + 's';
      shape.style.animationTimingFunction = 'linear';
      shape.style.animationIterationCount = 'infinite';
  
      var randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      shape.classList.add(randomShape);
  
      background.appendChild(shape);
    }
  };
  

