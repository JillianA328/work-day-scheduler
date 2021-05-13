




var saveTasks = function() {
    localStorage.setItem("#task", JSON.stringify(tasks));
  };

  var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));